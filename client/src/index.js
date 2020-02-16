import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import useAxios, { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Shop from '../src/Pages/Shop';
import Contact from '../src/Pages/Contact';
import NotFound from '../src/Pages/NotFound';
import Navbar from './Components/Global/Navbar';
import Footer from './Components/Global/Footer';
import BookDetail from './Components/Global/BookDetail';

Axios.defaults.baseURL = 'http://localhost:5000';

const axios = Axios.create({
  baseURL: 'http://localhost:5000'
});

const cache = new LRU({ max: 10 });
configure({ axios, cache });

//axios.defaults.headers.post['Content-Type'] = 'application/json';


// Route setup
const Root = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/books/book/:_id' component={BookDetail} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
