import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
  },
}));

export const Video = ({ url }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactPlayer className={classes.videoPlayer} url={url} controls />
    </div>
  );
};
