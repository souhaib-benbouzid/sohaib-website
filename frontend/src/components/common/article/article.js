import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiMarkdown from '../mui-markdown';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },
}));

export default function Article({ className, article: { content } }) {
  const classes = useStyles();
  return (
    <article className={`${className} ${classes.root}`}>
      <MuiMarkdown>{content}</MuiMarkdown>
    </article>
  );
}
