import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiMarkdown from '../mui-markdown';

const useStyles = makeStyles((theme) => ({
  root: {},
  topImage: {
    width: '100%',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  markdown: {
    padding: '3%',
  },
}));

export default function Article({
  className,
  article: {
    content,
    image: { url, alternativeText },
  },
}) {
  const classes = useStyles();
  return (
    <article className={`${className} ${classes.root}`}>
      <div className={classes.topImage}>
        <img src={url} alt={alternativeText} className={classes.image} />
      </div>
      <div className={classes.markdown}>
        <MuiMarkdown>{content}</MuiMarkdown>
      </div>
    </article>
  );
}
