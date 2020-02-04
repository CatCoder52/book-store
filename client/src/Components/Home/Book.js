import React from 'react';

const Book = () => {
  return (
    <div className='col-lg-4 col-md-12 mb-4'>
      <div className='overlay rounded z-depth-2 mb-4'>
        <img
          className='img-fluid'
          src='https://mdbootstrap.com/img/Photos/Others/images/81.jpg'
          alt='Sample image'
        />
        <a>
          <div className='mask rgba-white-slight' />
        </a>
      </div>
      <a href='#!' className='pink-text'>
        <h6 className='font-weight-bold mb-3'>
          <i className='fas fa-map pr-2' />
          Adventure
        </h6>
      </a>
      <h4 className='font-weight-bold mb-3'>
        <strong>Title of the news</strong>
      </h4>
      <p>
        by <a className='font-weight-bold'>Billy Forester</a>, 15/07/2018
      </p>
      <p className='dark-grey-text'>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus voluptas.
      </p>
      {/* Read more button */}
      <a className='btn btn-pink btn-rounded btn-md'>Read more</a>
    </div>
  );
};

export default Book;
