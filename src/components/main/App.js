import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../common/Navbar/index";
import Footer from "../common/Footer/index";
import Contact from "../contact/index";
import About from "../about/index";
import Projects from "../projects/index";
import Home from "../home/index";
import Hire from "../hire/index";

function App() {
  return (
    <Router>
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
