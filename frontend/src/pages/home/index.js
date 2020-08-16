import React, { lazy } from 'react';
import './style.scss';
import './animation.scss';
import { Link } from 'react-router-dom';
import File from './svg/file';

const links = {
  resume:
    'https://drive.google.com/file/d/1DFM3inv01hLhi5xikmJ1oUFBFtm792b-/view?usp=sharing',
};

const Home = () => {
  return (
    <section className='homepage'>
      <div class='content'>
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
            <Link to='/contact' className='btn btn-primary'>
              CONTACT ME
            </Link>
          </div>
        </article>
      </div>
      <div class='area'>
        <ul class='circles'>
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
