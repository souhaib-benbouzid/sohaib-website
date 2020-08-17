import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    transform: 'translateY(0)',
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
});

export default function ImgMediaCard({
  project: { title, description, preview_link, code_link, image, tags },
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} elevation={3}>
      <div className='card'>
        <a href={preview_link} className={classes.link}>
          <img src={image.url} alt={image.alt} className={classes.img} />
        </a>
        <div className={classes.content}>
          <h3 className={classes.header}>{title}</h3>
          <p className={classes.p}>{description}</p>
          <h4 className={classes.header2}>TechStack</h4>
          <div>
            {tags.map((tag, i) => (
              <div className={classes.link} key={i}>
                <span
                  className={`${classes.tag} ${classes[tag.type]}`}
                >{`#${tag.name}`}</span>
              </div>
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
    </div>
  );
}
