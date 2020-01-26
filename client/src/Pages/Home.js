import React from 'react'
import Header from '../Components/Home/Header'
import Navbar from '../Components/Home/Navbar'
import LazyLoad from 'react-lazyload';


const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <LazyLoad>
        <Header />
      </LazyLoad>
    </React.Fragment>
  );
}

export default Home
