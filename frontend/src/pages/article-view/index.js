import React from 'react';
import Sidebar from '../../components/common/sidebar';
import Article from '../../components/common/article';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { getArticle } from '../../apollo/queries';
import { useParams, Redirect } from 'react-router-dom';
import ProgressBar from '../../components/common/loading';
import ReactGa from 'react-ga';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
  },
  article: {
    width: '50%',
    background: '#2A2E35',
    borderRadius: '5px',
    flexBasis: '50%',
    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
    },
  },
  sidebar: {
    paddingBottom: '10px',

    [theme.breakpoints.down('md')]: {
      flexBasis: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '10px',
      flexBasis: '20%',
    },
  },
  menu: {
    padding: '20px',
    background: '#2A2E35',
    borderRadius: '5px',
    position: 'sticky',
    margin: 'auto',
    top: '0',
  },
}));

export default function Tutorial() {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  let { title } = useParams();
  const { loading, error, data } = useQuery(getArticle, {
    variables: { title },
  });
  const classes = useStyles();
  if (data) {
    if (data.articles.length === 0) return <Redirect to='/articles' />;
  }
  if (error) {
    console.error('something went wrong!');
  }
  return (
    <section className={classes.root}>
      <ProgressBar loading={loading} />
      {data ? (
        <>
          <Article className={classes.article} article={data.articles[0]} />
          <div className={classes.sidebar}>
            {data.articles[0].sidebar ? (
              <Sidebar
                className={classes.menu}
                sidebar={data.articles[0].sidebar}
              />
            ) : null}
          </div>
        </>
      ) : null}
    </section>
  );
}
