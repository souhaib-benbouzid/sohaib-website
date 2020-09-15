import React from 'react';
import { Card } from '../../components/common/fireCard';
import { makeStyles } from '@material-ui/core/styles';
import { getProjectsQuery } from '../../apollo/queries';
import { useQuery } from '@apollo/client';
import ProgressBar from '../../components/common/loading';
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
  const { loading, data, error } = useQuery(getProjectsQuery);
  const classes = useStyles();
  if (error) {
    alert('something went wrong!');
  }
  return (
    <section className={classes.root}>
      <ProgressBar loading={loading} />
      <h1 className={classes.header}>PROJECTS</h1>
      <div className={classes.cards}>
        {data
          ? data.projects.map((project, i) => (
              <Card project={project} key={i} />
            ))
          : null}
      </div>
    </section>
  );
};

export default Projects;
