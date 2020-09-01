import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { animated, useSpring } from 'react-spring';
import Tag from '../tag';

const API_URL = process.env.REACT_APP_IMAGE_API;

const useStyles = makeStyles({
  root: {
    maxWidth: '650px',
    overflow: 'hidden',
    fontWeight: 300,
    background: '#2a2e35',
    color: '#b2becd',
    padding: 0,
    display: 'inline-flex',
    flexDirection: 'column',
    margin: '0 0 1em',
    width: '100%',
    borderRadius: '0.25em',
    height: 'fit-content',
  },
  link: {
    textDecoration: 'none',
    fontWeight: 300,
    display: 'inline-block',
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
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '-0.5px',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    cursor: 'pointer',
  },
  actionButtons: { display: 'flex', width: '100%', padding: '20px 0' },
  preview_button: {
    width: '49%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ff005d',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 500,

    marginRight: '5px',
  },
  code_button: {
    width: '49%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#565c65',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 500,
  },

  header: {
    fontWeight: 800,
    fontStyle: 'normal',
    color: '#fff',
  },
  header2: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '15px',
    marginBottom: '5px',
  },
  content: {
    padding: '10px',
  },
  card: {},
});

export default function ImgMediaCard({
  project: { title, description, preview_link, code_link, image, tags },
}) {
  const classes = useStyles();
  const [{ transform }, set] = useSpring(() => ({
    transform: 'translate(0, 0px)',
  }));
  return (
    <animated.div
      className={classes.root}
      onMouseEnter={() => set({ transform: 'translate(0, -14px)' })}
      onMouseLeave={() => set({ transform: 'translate(0, 0)' })}
      style={{ transform }}
    >
      <div className={classes.card}>
        <a href={preview_link} className={classes.link}>
          <img
            src={API_URL ? API_URL + image.url : image.url}
            alt={image.alternativeText}
            className={classes.img}
          />
        </a>
        <div className={classes.content}>
          <h3 className={classes.header}>{title}</h3>
          <p className={classes.p}>{description}</p>
          <h4 className={classes.header2}>TechStack</h4>
          <div>
            {tags.map((tag, i) => (
              <Tag tag={tag} key={i} />
            ))}
          </div>
          <div className={classes.actionButtons}>
            <a
              href={preview_link}
              alt={title}
              className={classes.preview_button}
            >
              Preview
            </a>
            <a href={code_link} alt={title} className={classes.code_button}>
              Code
            </a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
