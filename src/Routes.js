import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./containers/home";
import CurrentOpenings from "./containers/currentOpenings";
import Recommendedjob from "./containers/recommendjob";
import Benefits from "./containers/benefits";
import Lifeatwork from "./containers/Lifeatwork";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/current_openings" component={CurrentOpenings} />
        <Route exact path="/recommended_job" component={Recommendedjob} />
        <Route exact path="/benefits" component={Benefits} />
        <Route exact path="/lifeatwork" component={Lifeatwork} />
      </Switch>
    </Router>
  );
};

export default Routes;
