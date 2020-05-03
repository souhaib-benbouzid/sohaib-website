import React, { lazy, Suspense } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Loading from "../common/transitions/loading";

const Navbar = lazy(() => import("../common/Navbar/index"));
const Footer = lazy(() => import("../common/Footer/index"));
const Contact = lazy(() => import("../contact/index"));
const About = lazy(() => import("../about/index"));
const Projects = lazy(() => import("../projects/index"));
const Hire = lazy(() => import("../hire/index"));
const Home = lazy(() => import("../home/index"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/hire">
            <Hire />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
