import React from 'react';
import Markdown from 'markdown-to-jsx';
import { makeStyles } from '@material-ui/core/styles';
import components from './components';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export const MuiMarkdown = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Markdown
        options={{
          overrides: {
            ...components,
          },
        }}
        {...props}
      />
    </div>
  );
};
