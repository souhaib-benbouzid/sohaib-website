import React from 'react';
import Sidebar from '../../components/common/sidebar';
import Article from '../../components/common/article';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { getArticle } from '../../appllo/queries';
import { useParams, Redirect } from 'react-router-dom';
import ProgressBar from '../../components/common/loading';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap-reverse',
  },
  article: {
    width: '80%',
    background: '#2A2E35',
    borderRadius: '5px',
    flexBasis: '80%',
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
  let { title } = useParams();

  const { loading, error, data } = useQuery(getArticle, {
    variables: { title },
  });
  const classes = useStyles();
  console.log(data);
  if (data) {
    if (data.articles.length === 0) return <Redirect to='/articles' />;
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
