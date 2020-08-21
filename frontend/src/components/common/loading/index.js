import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 3,
  },
  colorPrimary: {
    backgroundColor: '#1d1d1d',
  },
  colorSecondary: {
    backgroundColor: '#ffbf00',
  },
}))((props) => {
  return <LinearProgress {...props} />;
});

export const LoadingState = ({ loading }) => {
  const style = {
    zIndex: 50000000000000000,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: loading ? 'initial' : 'none',
  };
  return <BorderLinearProgress color='secondary' style={style} />;
};

export default LoadingState;
