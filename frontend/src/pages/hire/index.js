import React from 'react';
import './style.scss';

import ReactGa from 'react-ga';
import { useEffect } from 'react';

const Hire = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return <section className='hire'>{/* <p>coming soon...</p> */}</section>;
};

export default Hire;
