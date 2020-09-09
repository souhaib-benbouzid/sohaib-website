import React from 'react';
import './style.scss';
import './animation.scss';
import { Link } from 'react-router-dom';
import File from './svg/file';
import ReactGa from 'react-ga';
import { useEffect } from 'react';

const links = {
  resume:
    'https://drive.google.com/file/d/16x0kHy3GJs82kpFaQT6afNjp65Klofuz/view?usp=sharing',
};

const Home = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const report_button_click = (button_name) => {
    ReactGa.event({
      category: 'Button',
      action: `Click on ${button_name} button`,
    });
  };

  return (
    <section className='homepage'>
      <div className='content'>
        <div className='top'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={links.resume}
            className='resume'
          >
            <File className='file-icon' />
            <span>Resume</span>
          </a>
        </div>
        <article className='main'>
          <div className='left'>
            <h1>
              Hi, I'm <span>Sohaib</span> <br />
            </h1>
            <h2> Fullstack JavaScript / Typescript Developer.</h2>
            <div className='buttons'>
              <Link
                to='/contact'
                onClick={() => report_button_click('CONTACT ME')}
                className='btn btn-primary'
              >
                CONTACT ME
              </Link>
              <Link
                to='/projects'
                onClick={() => report_button_click('PROJECTS')}
                className='btn btn-secondary'
              >
                PROJECTS
              </Link>
            </div>
          </div>
        </article>
      </div>
      <div className='area'>
        <ul className='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
