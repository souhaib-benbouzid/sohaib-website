import React, { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loading from './components/common/transitions/loading';

const Contact = lazy(() => import('./pages/contact'));
const About = lazy(() => import('./pages/about'));
const Projects = lazy(() => import('./pages/projects'));
const Hire = lazy(() => import('./pages/hire'));
const Home = lazy(() => import('./pages/home'));

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/hire' component={Hire} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}
