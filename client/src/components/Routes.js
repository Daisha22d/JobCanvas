import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/LogIn.js';
import JobPosting from '../pages/JobPosting.js';
import SignUp from '../pages/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/jobposting" component={JobPosting} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default Routes;
