import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
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
  },
  itemText: {
    color: '#fff',
    fontSize: '1rem',
    wordBreak: 'break-all',
    textDecoration: 'none',
  },
  listItem: {
    padding: '0',
  },
  headerText: {
    wordBreak: 'break-all',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  link: {
    textDecoration: 'none',
  },
});

const SubList = ({ item: { isOpen, header, items } }) => {
  const classes = useStyles();
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
      >
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText
          primary={header}
          className={classes.headerText}
          disableTypography
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' dense>
          {items.map((item, i) => (
            <a href={item.url} key={i} className={classes.link}>
              <ListItem button className={classes.nested}>
                {/* {item.icon ? (
                <ListItemIcon>{item.icon}</ListItemIcon>
              ) : (
                <ListItemIcon>{''}</ListItemIcon>
              )} */}
                <ListItemText
                  primary={item.name}
                  className={classes.itemText}
                  disableTypography
                />
              </ListItem>
            </a>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export const Sidebar = ({
  className,
  sidebar: {
    sections: { items },
  },
  ...rest
}) => {
  return (
    <div className={className}>
      <List dense>
        {items.map((item, i) => (
          <SubList item={item} key={i} />
        ))}
      </List>
    </div>
  );
};
