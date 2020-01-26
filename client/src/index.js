import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Shop from '../src/Pages/Shop'
import Contact from '../src/Pages/Contact'
import NotFound from '../src/Pages/NotFound'
import * as serviceWorker from './serviceWorker';

// Route setup
const Root = () => (
  <Router>
    <Fragment>
       <Switch>
        <Route path='/' exact component={App} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/contact' exact component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);



ReactDOM.render(<Root />, document.getElementById('root'));


serviceWorker.unregister();