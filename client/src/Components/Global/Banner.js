import React from 'react';
import LazyLoad from 'react-lazyload';

const Banner = ({ image }) => {
  return (
    <React.Fragment>
      {/* Featured image */}
      <div>
        <LazyLoad>
          <img
            src={image}
            className='img-fluid z-depth-1 rounded vh-50 w-100 z-1'
          />
        </LazyLoad>
        <div class='mask flex-center orange z-9 pt-4'>
          <div className='col-lg-12 col-md-12 col-sm-12 text-center z-10 '>
            <ul className='list-unstyled mb-0 d-flex justify-content-evenly'>
              <li>
                <i className='fas fa-map-marker-alt fa-2x white-text' />
                <p className='white-text'>San Francisco, CA</p>
              </li>
              <li>
                <i className='fas fa-phone fa-2x white-text' />
                <p className='white-text'>+8801736781616</p>
              </li>
              <li>
                <i className='fas fa-envelope fa-2x white-text' />
                <p className='mb-3 white-text'>syed.simanta10@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
