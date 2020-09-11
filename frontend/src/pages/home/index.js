import React from 'react';
import './style.scss';
import './animation.scss';
import { Link } from 'react-router-dom';
import File from './svg/file';
import ReactGa from 'react-ga';
import { useEffect } from 'react';

const home = {
  resume: {
    title: 'Resume',
    href:
      'https://drive.google.com/file/d/16x0kHy3GJs82kpFaQT6afNjp65Klofuz/view?usp=sharing',
  },
  job: 'Fullstack Python / Typescript Developer.',
  buttonPrimary: {
    title: 'CONTACT ME',
    href: '/contact',
  },
  buttonSecondary: {
    href: '/projects',
    title: 'PROJECTS',
  },
};

const Home = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const { resume, job, buttonPrimary, buttonSecondary } = home;

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
            href={resume.href}
            className='resume'
          >
            <File className='file-icon' />
            <span>{resume.title}</span>
          </a>
        </div>
        <article className='main'>
          <div className='left'>
            <h1>
              Hi, I'm <span>Sohaib</span> <br />
            </h1>
            <h2>{job}</h2>
            <div className='buttons'>
              <Link
                to={buttonPrimary.href}
                onClick={() => report_button_click('CONTACT ME')}
                className='btn btn-primary'
              >
                {buttonPrimary.title}
              </Link>
              <Link
                to={buttonSecondary.href}
                onClick={() => report_button_click('PROJECTS')}
                className='btn btn-secondary'
              >
                {buttonSecondary.title}
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
