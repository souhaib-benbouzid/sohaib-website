import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { animated, useSpring } from 'react-spring';
import Tag from '../tag';
import { useHistory } from 'react-router-dom';

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
    height: 'fit-content',

    borderRadius: '0.25em',
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
  watchLink: {
    width: '100%',
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
  firebase: {
    background: '#ffcb2b',
    color: '#12181a',
  },
  typescript: {
    background: '#498afb',
    color: '#fff',
  },
  react: {
    color: '#00d8ff',
    background: '#222',
  },
  cloudFunctions: {
    background: '#498afb',
    color: '#fff',
  },
  redux: {
    background: '#764abc',
    color: '#fff',
  },
  sass: {
    background: '#bf4080',
    color: '#fff',
  },
  python: {
    background: '#2b5b84',
    color: '#fff',
  },
  postgresql: {
    background: '#32658F',
    color: '#fff',
  },
  javascript: {
    background: '#F36621',
    color: '#fff',
  },
  header: {
    fontWeight: 800,
    fontStyle: 'normal',
    color: '#fff',
    fontSize: '22px',
  },

  content: {
    padding: '10px',
  },
  card: {
    height: 'fit-content',
  },
});

const API_URL = process.env.REACT_APP_IMAGE_API;

export const TutorialCard = ({
  article: {
    image: { url, alternativeText },
    title,
    title_seo,
    description,
    tags,
  },
}) => {
  const classes = useStyles();
  const [{ transform }, set] = useSpring(() => ({
    transform: 'translate(0, 0px)',
  }));
  const history = useHistory();
  return (
    <animated.div
      className={classes.root}
      onMouseEnter={() => set({ transform: 'translate(0, -14px)' })}
      onMouseLeave={() => set({ transform: 'translate(0, 0)' })}
      style={{ transform }}
    >
      <div className={classes.card}>
        <div
          onClick={() => history.push(`/articles/${title_seo}`)}
          className={classes.link}
        >
          <img
            src={API_URL ? API_URL + url : url}
            alt={alternativeText}
            className={classes.img}
          />
        </div>
        <div className={classes.content}>
          <h3 className={classes.header}>{title}</h3>
          <p className={classes.p}>{description}</p>
          <div>
            {tags.map((tag, i) => (
              <Tag tag={tag} key={i} />
            ))}
          </div>
          <div className={classes.actionButtons}>
            <div
              onClick={() => history.push(`/articles/${title_seo}`)}
              className={classes.watchLink}
            >
              Read Now
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
