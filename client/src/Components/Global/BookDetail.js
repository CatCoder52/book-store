import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Banner from './Banner';
import Spinner from '../Global/Spinner';
import Checkout from '../Stripe/Stripe';

const BookDetail = ({ match }) => {
  const _id = match.url;

  const [data, setData] = useState({ book: {} });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
    const fetchData = async () => {
      const result = await axios(`${_id}`);
      setData(result.data);
    };
    fetchData();
  }, []);

  let { title, price, image, summary, isbn, author, genre } = data.book;
  const bookinstance = data.book_instance;

  const instanceInfo = () => {
    if (bookinstance) {
      return bookinstance.map(book => (
        <div>
          <p>
            {' '}
            <strong>Status:&nbsp;</strong>
            {book.status}
          </p>
          <p>
            {' '}
            <strong>Imprint:&nbsp;</strong>
            {book.imprint}
          </p>
        </div>
      ));
    }
  };

  const genreInfo = () => {
    if (genre) {
      let { name: genreName } = genre[0];
      return genreName;
    }
  };

  const authorInfo = () => {
    if (author) {
      const { first_name, family_name } = author;

      return `${first_name} ${family_name}`;
    }
  };

  return (
    <div>
      <Banner
        title={title}
        price={price}
        image='https://images.pexels.com/photos/356353/pexels-photo-356353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      {isLoaded ? (
        <React.Fragment>
          <div className='center'>
            <div className='cardcontainer my-5 py-5'>
              {/*Section: Content*/}
              <section className='text-center'>
                {/* Section heading */}

                <div className='row m-0'>
                  <div className='col-lg-6 center'>
                    {/*Carousel Wrapper*/}
                    <div
                      id='carousel-thumb'
                      className='carousel slide carousel-fade carousel-thumbnails'
                      data-ride='carousel'
                    >
                      {/*Slides*/}
                      <div
                        className='carousel-inner text-center text-md-left'
                        role='listbox'
                      >
                        <div className='carousel-item active'>
                          <img
                            src={image}
                            alt='First slide'
                            className='img-fluid z-depth-2 animated pulse infinite slower'
                          />
                        </div>
                      </div>
                    </div>
                    {/*/.Carousel Wrapper*/}
                  </div>
                  <div className='col-lg-5 text-center'>
                    {/*Accordion wrapper*/}
                    <div className='accordion md-accordion'>
                      {/* Accordion card */}
                      <div className='card'>
                        {/* Card header */}
                        <div
                          className='card-header'
                          role='tab'
                          id='headingOne1'
                        >
                          <a
                            data-toggle='collapse show '
                            data-parent='#accordionEx'
                            href='#collapse show One1'
                            aria-expanded='true'
                            aria-controls='collapse show One1'
                          >
                            <h5 className='mb-0'>Book Info</h5>
                          </a>
                        </div>
                        {/* Card body */}
                        <div
                          id='collapse show One1'
                          className='collapse show  show'
                          role='tabpanel'
                          aria-labelledby='headingOne1'
                          data-parent='#accordionEx'
                        >
                          <div className='p-2'>
                            <span className='badge badge-danger product mb-4 ml-xl-0 ml-4 p-1'>
                              {genreInfo()}
                            </span>
                            <h5 className='text-left'>
                              <strong>Title:&nbsp;</strong>
                              {title}
                            </h5>
                            <h5 className='text-left red-text font-weight-bold'>
                              Price: ${price}
                              <span className='grey-text'>
                                <small>
                                  <s>
                                    ${Math.floor(Math.random() * (10 - 8) + 8)}
                                  </s>
                                </small>
                              </span>
                            </h5>
                            <h5 className='text-left'>
                              <strong>Isbn:&nbsp;</strong>
                              {isbn}
                            </h5>
                          </div>
                        </div>
                      </div>
                      {/* Accordion card */}
                      {/* Accordion card */}
                      <div className='card'>
                        {/* Card header */}
                        <div className='card-header'>
                          <h5 className='mb-0'>Details</h5>
                        </div>
                        {/* Card body */}
                        <div className='p-3'>
                          <p className='text-left'>
                            <strong>Summary:&nbsp;</strong>
                            {summary}
                          </p>
                          <p className='text-left'>
                            <strong>Auhtor:&nbsp;</strong>
                            {authorInfo()}
                          </p>
                          <p className='text-left'>{instanceInfo()}</p>
                        </div>
                      </div>
                      {/* Accordion card */}
                    </div>
                    {/*/.Accordion wrapper*/}
                    {/* Add to Cart */}
                    <section className='color'>
                      <div className='mt-5'>
                        <div className='row mt-3'>
                          <div className='col-md-12 text-lg-center text-md-left text-md-right'>
                            <div className='d-flex justify-content-center align-items-center mt-3'>
                              <Checkout
                                amount={price}
                                description={title}
                                image='https://img.icons8.com/bubbles/100/000000/book.png'
                                locale='auto'
                                name='www.3sisters.com'
                                label='Buy This Book'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* /.Add to Cart */}
                  </div>
                </div>
              </section>
              {/*Section: Content*/}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default withRouter(BookDetail);
