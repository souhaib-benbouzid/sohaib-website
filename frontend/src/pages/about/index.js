import React from 'react';
import './style.scss';
import Photo from './animation';
import ReactGa from 'react-ga';
import { useEffect } from 'react';

const about = {
  header: 'About Me',
  bio:
    "I'm a self-taught passionate developer, a creative person, and a hard worker. always learning, discovering, and trying new things. Passionate about web development specifically and interested in the entire spectrum of software development. in my journey, I had the chance to work with many Web Technologies, React, Redux , Node, Flask, Django & Firebase to name a few.",
  goal:
    'Looking for opportunities and ambitious projects with positive people.',
  timelineElements: [
    {
      date: 'Aug 2020 - Present',
      title: 'Fuelupeducation.com— FullStack Web Developer',
      description:
        'Freelance work, Collaborate with Fuelupeducation team to implement a multilingual free learning platform',
    },
    {
      date: 'Jan 2020 - Present',
      title: 'Dzcode.io— FullStack Web Developer',
      description: 'One million arab scholarship',
    },
    {
      date: 'Oct 2019 - Present',
      title: 'Freelance, ​Upwork—Frontend Web Developer',
      description: '',
    },
    {
      date: 'Jan 2020- April 2020',
      title: 'Udacity ​—​Full Stack Web Developer ​Nano Degree',
      description: 'One million arab scholarship',
    },
  ],
};

const About = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  const { header, goal, bio, timelineElements } = about;

  return (
    <section className='about'>
      <div className='text'>
        <div className='top'>
          <h1>{header}</h1>

          <p id='start'>{bio}</p>
          <p>{goal}</p>
        </div>

        <div className='timeline'>
          <div className='timeline__element'>
            <h1 className='timeline_title'>Experience</h1>
          </div>
          {timelineElements.map((element, i) => (
            <div className='timeline__element' key={i}>
              <span>{element.date}</span>
              <h1>{element.title}</h1>
              <h2>{element.description}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='animation'>
        <Photo className='person' />
      </div>
    </section>
  );
};

export default About;
