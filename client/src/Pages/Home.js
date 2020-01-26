import React from 'react'
import Header from '../Components/Home/Header'

import LazyLoad from 'react-lazyload';
import Tips from '../Components/Home/Tips';
import Subscribe from '../Components/Home/Subscribe';


const Home = () => {
  return (
    <React.Fragment>
      <LazyLoad>
        <Header />
      </LazyLoad>
      <Subscribe/>
      <Tips/>
    </React.Fragment>
  );
}

export default Home
