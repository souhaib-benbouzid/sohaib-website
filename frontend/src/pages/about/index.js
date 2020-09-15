import React from 'react';
import './style.scss';
import ReactGa from 'react-ga';
import { useEffect } from 'react';
import { getAboutDataQuery } from '../../apollo/queries';
import { useQuery } from '@apollo/client';
import ProgressBar from '../../components/common/loading';

const About = () => {
  const { loading, data, error } = useQuery(getAboutDataQuery);

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  console.log(data);

  return (
    <section className='about'>
      <ProgressBar loading={loading} />
      {data ? (
        <div className='text'>
          <div className='top'>
            <h1>{data.about.title}</h1>

            <p id='start'>{data.about.bio}</p>
            <p>{data.about.goal}</p>
          </div>

          <div className='timeline'>
            <div className='timeline__element'>
              <h1 className='timeline_title'>Experience</h1>
            </div>
            {data.about.experience.length > 0 &&
              data.about.experience.map((element, i) => (
                <div className='timeline__element' key={i}>
                  <span>{element.date}</span>
                  <h1>{element.title}</h1>
                  <h2>{element.description}</h2>
                </div>
              ))}
            {data.about.achievements.length > 0 ||
            data.about.certifications.length > 0 ? (
              <div className='timeline__element'>
                <h1 className='timeline_title'>
                  Achievements & Certifications
                </h1>
              </div>
            ) : null}

            {data.about.achievements.length > 0 ? (
              <>
                {data.about.achievements.map((achievement, i) => (
                  <div className='timeline__element' key={i}>
                    <span>{achievement.period}</span>
                    <h1>{achievement.title}</h1>
                    <h2>{achievement.description}</h2>
                  </div>
                ))}
              </>
            ) : null}
            {data.about.certifications.length > 0 ? (
              <>
                {data.about.certifications.map((certification, i) => (
                  <div className='timeline__element' key={i}>
                    <span>{certification.period}</span>
                    <h1>{certification.title}</h1>
                    <h2>{certification.description}</h2>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      ) : error ? (
        <div>No Data Available! Please Reload Your Browser</div>
      ) : null}
    </section>
  );
};

export default About;
