import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gap: '1.25rem',
    gridTemplateColumns: 'repeat(auto-fit,minmax(250px,500px))',
    justifyContent: 'spaceEvenly',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 300,
    color: '#fff',
  },
  cardContent: {
    padding: '1em',
    fontWeight: 300,
  },
  p: {
    display: 'block',
    marginBNlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  },
  tag: {
    fontSize: '.7em',
    display: 'inline-block',
    letterSpacing: '.15ch',
    fontWeight: 400,
    background: '#ffcb2b',
    color: '#12181a',
  },
});

export default function ImgMediaCard({ tags }) {
  const classes = useStyles();

  return (
    <div className={classes.root} elevation={3}>
      <div className='card'>
        <a href='/www.google.com' className={classes.link}>
          <img
            src='https://fireship.io/lessons/firebase-quickstart//img/featured.webp'
            alt='test'
          />
        </a>
        <p className={classes.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          molestias alias adipisci culpa debitis consequatur!
        </p>
        {tags.map((tag) => (
          <a href={tag.href} className={classes.link}>
            <span className={classes.tag}>{tag.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
