import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Layout from './layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Suspense } from 'react';
import Loading from './components/common/transitions/loading';
import { ApolloProvider } from '@apollo/client';
import { client } from './appllo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes />
        </Layout>
      </Suspense>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
