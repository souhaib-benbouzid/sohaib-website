import React from 'react';
// import { useState } from 'react';
import { Card } from './fireCard';
import { makeStyles } from '@material-ui/core/styles';
import { data } from '../../api/projects';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    borderBottom: `5px solid #ffbf00`,
    color: '#fff',
    marginBottom: '50px',
  },
  cards: {
    display: 'grid',
    gap: '1.25rem',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit,minmax(250px,500px))',
    justifyContent: 'space-evenly',
  },
});

const Projects = () => {
  // const initialState = [data.projects];
  // const [projects, setprojects] = useState(...initialState);
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h1 className={classes.header}>PROJECTS</h1>
      <div className={classes.cards}>
        {data.projects.map((project, i) => {
          return <Card project={project} key={i} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
