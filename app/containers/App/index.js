/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';
import Footer from 'components/Footer';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </HashRouter>
    <Footer />
  </div>
);

export default App;
