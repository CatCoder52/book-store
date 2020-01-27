import React from 'react'
import LazyLoad from 'react-lazyload';

import Header from '../Components/Home/Header'
import Tips from '../Components/Home/Tips';
import Subscribe from '../Components/Home/Subscribe';
import Features from '../Components/Home/Features';


const Home = () => {
  return (
    <React.Fragment>
      <LazyLoad>
        <Header />
      </LazyLoad>
      <Features/>
      <Subscribe/>
      <Tips/>
    </React.Fragment>
  );
}

export default Home
