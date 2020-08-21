import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '56.25%' /* Player ratio: 100 / (1280 / 720) */,
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

export const Video = ({ url }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ReactPlayer
        className={classes.videoPlayer}
        url={url}
        controls
        width='100%'
        height='100%'
      />
    </div>
  );
};
