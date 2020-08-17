import React from 'react';
import Sidebar from '../../components/common/sidebar';
import Article from '../../components/common/article';
import { makeStyles } from '@material-ui/core/styles';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap-reverse',
  },
  article: {
    width: '80%',
    background: '#2A2E35',
    borderRadius: '5px',
    flexBasis: '80%',
    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
    },
  },
  sidebar: {
    paddingBottom: '10px',

    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '10px',
      flexBasis: '20%',
    },
  },
  menu: {
    padding: '20px',
    background: '#2A2E35',
    borderRadius: '5px',
    position: 'sticky',
    margin: 'auto',
    top: '0',
  },
}));

const items = [
  {
    isOpen: true,
    header: {
      name: 'Header1',
      label: 'Header1',
    },
    items: [
      { url: '/home', name: 'item1item1item1item1item1item1item1item1' },
      { url: '/home', name: 'item2', icon: <StarBorder /> },
      { url: '/home', name: 'item3' },
    ],
  },
  {
    isOpen: false,
    header: {
      name: 'Header2',
    },
    items: [
      { url: '/home', name: 'item1' },
      { url: '/home', name: 'item2' },
      { url: '/home', name: 'item3' },
    ],
  },
  {
    isOpen: false,
    header: {
      name: 'Header3',
    },
    items: [
      { url: '/home', name: 'item1' },
      { url: '/home', name: 'item2' },
      { url: '/home', name: 'item3' },
    ],
  },
];

export default function Tutorials() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Article className={classes.article} />
      <div className={classes.sidebar}>
        <Sidebar className={classes.menu} items={items} />
      </div>
    </section>
  );
}
