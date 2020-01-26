import React from 'react';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='red lighten-5 p-5 center flex-column'>
        <div className='center my-4'>
          <i className='fa fa-book-open fa-2x deep-orange-text'></i>
          <strong className='ml-2 deep-orange-text lead'>4Shop</strong>
        </div>
        <div className='text-gray'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have <br /> suffered duskam alteration variations of
          passages
        </div>
        <div className='my-5 flex-center'>
          {/* Facebook */}
          <a className='fb-ic'>
            <i className='fab fa-facebook-f fa-lg gray-text mr-md-5 mr-3 fa-2x'></i>
          </a>
          {/* Twitter */}
          <a className='tw-ic'>
            <i className='fab fa-twitter fa-lg gray-text mr-md-5 mr-3 fa-2x'>
              {' '}
            </i>
          </a>

          {/*Instagram*/}
          <a className='ins-ic'>
            <i className='fab fa-instagram fa-lg gray-text mr-md-5 mr-3 fa-2x'></i>
          </a>
        </div>
      </div>
      <div className='red lighten-5 pb-5'>
        <div className='container'>
          <div className='row mx-auto'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <p className='sm-center'>Copyright &copy; All Rights Reserved</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='sm-center text-right'>
                <img src='./img/payment.png' alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
