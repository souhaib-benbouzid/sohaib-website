import React from 'react';
import List from '@material-ui/core/List';
// import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  nested: {
    padding: '2px 0',
    wordBreak: 'break-all',
    width: '100%',
  },
  header: {
    color: '#ffbf00',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  item: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    padding: '10px 0',
  },
  listItem: {
    padding: '0',
  },
});

const SubList = ({ item: { isOpen, header, items } }) => {
  const classes = useStyles();
  console.log(isOpen);
  const [open, setOpen] = React.useState(isOpen);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        className={classes.header}
        disableGutters
        disableTypography
      >
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary={header.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' dense disablePadding>
          {items.map((item, i) => (
            <a href={item.url}>
              <ListItem
                button
                key={i}
                className={classes.nested}
                disableTypography
                TouchRippleProps={false}
              >
                {/* {item.icon ? (
                <ListItemIcon>{item.icon}</ListItemIcon>
              ) : (
                <ListItemIcon>{''}</ListItemIcon>
              )} */}
                <ListItemText
                  primary={item.name}
                  className={classes.item}
                  disableTypography
                  TouchRippleProps={false}
                />
              </ListItem>
            </a>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export const Sidebar = ({ className, items, ...rest }) => {
  return (
    <div className={className}>
      <List disablePadding dense>
        {items.map((item, i) => (
          <>
            <SubList item={item} key={i} />
          </>
        ))}
      </List>
    </div>
  );
};
