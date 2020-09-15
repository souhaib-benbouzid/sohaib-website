import React from 'react';
import './style.scss';
import './animation.scss';
import { Link } from 'react-router-dom';
import File from './svg/file';
import ReactGa from 'react-ga';
import { useEffect } from 'react';
import { getHomeDataQuery } from '../../apollo/queries';
import { useQuery } from '@apollo/client';
import ProgressBar from '../../components/common/loading';

const Home = () => {
  const { loading, data, error } = useQuery(getHomeDataQuery);

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
      <ProgressBar loading={loading} />
      {data ? (
        <div className='content'>
          <div className='top'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={data.home.resume.href}
              className='resume'
            >
              <File className='file-icon' />
              <span>{data.home.resume.title}</span>
            </a>
          </div>
          <article className='main'>
            <div className='left'>
              <h1>
                Hi, I'm <span>Sohaib</span> <br />
              </h1>
              <h2>{data.home.job}</h2>
              <div className='buttons'>
                <Link
                  to={data.home.buttonPrimary.href}
                  onClick={() => report_button_click('CONTACT ME')}
                  className='btn btn-primary'
                >
                  {data.home.buttonPrimary.title}
                </Link>
                <Link
                  to={data.home.buttonSecondary.href}
                  onClick={() => report_button_click('PROJECTS')}
                  className='btn btn-secondary'
                >
                  {data.home.buttonSecondary.title}
                </Link>
              </div>
            </div>
          </article>
        </div>
      ) : error ? (
        <div>No Data Available! Please Reload Your Browser</div>
      ) : null}

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
