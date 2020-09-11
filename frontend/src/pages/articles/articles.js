import React from 'react';
import { TutorialCard } from '../../components/common/tutorial-card';
import { makeStyles } from '@material-ui/core/styles';
import { getArticles } from '../../apollo/queries';
import { useQuery } from '@apollo/client';
import ProgressBar from '../../components/common/loading';
import ReactGa from 'react-ga';
import { useEffect } from 'react';

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
  card: {
    textDecoration: 'none',
  },
});

const Articles = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  const classes = useStyles();

  const { data, error, loading } = useQuery(getArticles);

  if (error) return <div>something went wrong !</div>;

  return (
    <section className={classes.root}>
      <h1 className={classes.header}>Articles</h1>
      <div className={classes.cards}>
        <ProgressBar loading={loading} />
        {data
          ? data.articles.map((article, i) => {
              return (
                <a
                  key={i}
                  href={`/articles/${article.title_seo}`}
                  className={classes.card}
                >
                  <TutorialCard article={article} />
                </a>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default Articles;
