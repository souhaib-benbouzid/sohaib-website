import React from 'react';
import Sidebar from '../../components/common/sidebar';
import Article from '../../components/common/article';
import { makeStyles } from '@material-ui/core/styles';
import StarBorder from '@material-ui/icons/StarBorder';
import README from '../../api/test.md';
import { useQuery, gql } from '@apollo/client';

const tutorialQuery = gql`
  query GetTutorial {
    articles {
      title
      id
    }
  }
`;

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

const articles = [
  {
    title: {},
    content: README,
    video_url: 'https://www.youtube.com/watch?v=jsvHr8SErlM',
    sidebar: [
      {
        isOpen: true,
        header: 'Header1',
        items: [
          { url: '/home', name: 'item1item1item1item1item1item1item1item1' },
          { url: '/home', name: 'item2', icon: <StarBorder /> },
          { url: '/home', name: 'item3' },
        ],
      },
      {
        isOpen: false,
        header: {
          name: 'Header2',
        },
        items: [
          { url: '/home', name: 'item1' },
          { url: '/home', name: 'item2' },
          { url: '/home', name: 'item3' },
        ],
      },
      {
        isOpen: false,
        header: {
          name: 'Header3',
        },
        items: [
          { url: '/home', name: 'item1' },
          { url: '/home', name: 'item2' },
          { url: '/home', name: 'item3' },
        ],
      },
    ],
  },
];

export default function Tutorial() {
  const { loading, error, data } = useQuery(tutorialQuery);
  const classes = useStyles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className={classes.root}>
      {`articles: ${JSON.stringify(data.articles)}`}

      {articles.map((article, i) => (
        <>
          <Article key={i} className={classes.article} {...article} />
          <div className={classes.sidebar}>
            <Sidebar className={classes.menu} items={article.sidebar} />
          </div>
        </>
      ))}
    </section>
  );
}
