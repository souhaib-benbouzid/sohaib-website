import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none',
    fontWeight: 300,
    display: 'inline-block',
    color: '#fff',
  },
  tag: {
    fontSize: '.79em',
    display: 'inline-block',
    letterSpacing: '.15ch',
    padding: '4px',
    fontWeight: 'bold',
    background: '#565c65',
    color: '#fff',
    marginRight: '4px',
    marginBottom: '5px',
    borderRadius: '2px',
  },
  Firebase: {
    background: '#ffcb2b',
    color: '#12181a',
  },
  TypeScript: {
    background: '#498afb',
    color: '#fff',
  },
  React: {
    color: '#00d8ff',
    background: '#222',
  },
  CloudFunctions: {
    background: '#498afb',
    color: '#fff',
  },
  Redux: {
    background: '#764abc',
    color: '#fff',
  },
  Sass: {
    background: '#bf4080',
    color: '#fff',
  },
  Python: {
    background: '#2b5b84',
    color: '#fff',
  },
  PostgreSQL: {
    background: '#32658F',
    color: '#fff',
  },
  JavaScript: {
    background: '#F36621',
    color: '#fff',
  },
});

export const Tag = ({ tag: { name }, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} {...rest}>
      <span className={`${classes.tag} ${classes[name]}`}>{`#${name}`}</span>
    </div>
  );
};

export default Tag;
