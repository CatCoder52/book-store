import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';



const Header = () => {
  return (
    <header className='vh-100'>
      {/* Full Page Intro */}
      <div
        className='view'
        style={{
          backgroundImage:
            'url("https://mdbootstrap.com/img/Photos/Others/architecture.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        {/* Mask & flexbox options*/}
        <div className='mask peach-gradient op d-flex justify-content-center align-items-center'>
          {/* Content */}
          <div>
            {/*Grid row*/}
            <div className='row d-flex justify-content-center align-items-center'>
              {/*Grid column*/}
              <div className='col-md-12 white-text d-flex flex-column justify-content-center align-items-center'>
                <LazyLoad height={200}>
                  <img
                    src='./img/8.png'
                    alt
                    className='img-fluid book-fly animated pulse infinite slower'
                  />
                </LazyLoad>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className='col-md-12 white-text book-center flex-column mb-5'>
                <h1 className='h1-responsive font-weight-bold text-white'>
                  <strong className='display-10 deep-orange-text'>4</strong>
                  <strong className='t-shadow-bg'>BROTHER BOOK SHOP</strong>
                </h1>
                <h6 className='mb-4 text-white t-shadow-bg'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br /> Rem repellendus quasi fuga nesciunt dolorum nulla
                  magnam veniam sapiente! Commodi sequi non animi ea dolor
                  molestiae iste.
                </h6>
                <div>
                  <Link to='/shop' className='btn btn-white btn-rounded'>
                    Buy Books
                  </Link>
                  <Link
                    to='/contact'
                    className='btn btn-outline-white btn-rounded'
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Content */}
        </div>
        {/* Mask & flexbox options*/}
      </div>
      {/* Full Page Intro */}
    </header>
  );
};

export default Header;
