import React, { useState } from 'react';
import axios from 'axios';
import { Slider } from 'antd';

import Banner from './../Components/Global/Banner';
import Book from './../Components/Global/Book';
import Spinner from '../Components/Global/Spinner';

const Shop = () => {
  const [data, setData] = useState();
  const [mapdata, setMapdata] = useState();
  const [loader, setLoader] = useState(false);

  //Search data GET
  const searchData = async param => {
    try {
      const response = await axios.get(param);
      console.log(response);
      const datareq = await response.data;

      setMapdata(datareq);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = param => {
    searchData(param);
    setLoader(true);
  };

  const onChange = value => {
    handleSubmit(`/books/books?price=${value}`);
  };

  return (
    <React.Fragment>
      <Banner image='https://images.pexels.com/photos/356353/pexels-photo-356353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
      <div className='search'>
        <div className='search-ui'>
          <input
            className='form-control w-75'
            type='text'
            placeholder='Search ex: slow'
            aria-label='Search'
            value={data}
            onBlur={e => setData(`/books/books?title=/${e.target.value}/i`)}
          />
          <button
            className='btn btn-success btn-rounded btn-sm m-0'
            onClick={() => handleSubmit(data)}
          >
            Search
          </button>
        </div>
      </div>

      <div className='row m-0'>
        <div className='col-2'>
          <div>
            <div className='py-5'>
              {/*Section: Content*/}
              <section className>
                {/*Grid row*/}
                <div className='row d-flex justify-content-center'>
                  {/*Grid column*/}
                  <div className='border p-5'>
                    {/* Filter panel */}
                    <div className='mb-5'>
                      <h5 className='font-weight-bold mb-3'>Order by</h5>
                      <div className='divider-small mb-3' />
                      <ul className='list-unstyled link-black'>
                        <li className='mb-2'>
                          <a href className='active'>
                            Default
                          </a>
                        </li>
                        {/*                         <li className='mb-2'>
                          <a href className>
                            Popularity
                          </a>
                        </li>
                        <li className='mb-2'>
                          <a href className>
                            Rating
                          </a>
                        </li> */}
                        <li
                          className='mb-2'
                          onClick={() => {
                            handleSubmit('/books/books?sort=price');
                          }}
                        >
                          <a>Price: low to high</a>
                        </li>
                        <li
                          className='mb-2'
                          onClick={() => {
                            handleSubmit('/books/books?sort=-price');
                          }}
                        >
                          <a href className>
                            Price: high to low
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Filter panel */}
                    {/* Filter panel */}
                    <div className='mb-5'>
                      <h5 className='font-weight-bold mb-3'>Category</h5>
                      <div className='divider-small mb-3' />
                      <div
                        className='form-check pl-0 mb-2'
                        onClick={() => {
                          handleSubmit('/books/books');
                        }}
                      >
                        <input
                          type='radio'
                          className='form-check-input'
                          id='materialGroupExample1'
                          name='groupOfMaterialRadios'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='materialGroupExample1'
                        >
                          All
                        </label>
                      </div>
                      <div
                        className='form-check pl-0 mb-2'
                        onClick={() => {
                          handleSubmit(
                            '/genres/genre/5df68549837ce22bd00d2cea'
                          );
                        }}
                      >
                        <input
                          type='radio'
                          className='form-check-input'
                          id='materialGroupExample2'
                          name='groupOfMaterialRadios'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='materialGroupExample2'
                        >
                          Fantasy
                        </label>
                      </div>
                      <div className='form-check pl-0 mb-2'>
                        <input
                          type='radio'
                          className='form-check-input'
                          id='materialGroupExample3'
                          name='groupOfMaterialRadios'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='materialGroupExample3'
                        >
                          Science Fiction
                        </label>
                      </div>
                      <div className='form-check pl-0 mb-2'>
                        <input
                          type='radio'
                          className='form-check-input'
                          id='materialGroupExample4'
                          name='groupOfMaterialRadios'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='materialGroupExample4'
                        >
                          Horror
                        </label>
                      </div>
                    </div>
                    {/* Filter panel */}
                    {/* Filter panel */}
                    <div className='mb-5'>
                      <h5 className='font-weight-bold mb-3'>Price</h5>
                      <Slider
                        step={1}
                        tooltipVisible
                        tooltipPlacement='left'
                        defaultValue={0}
                        onChange={onChange}
                      />
                    </div>
                    {/* Filter panel */}
                    {/* Filter panel */}
                    {/*                     <div className='link-black'>
                      <h5 className='font-weight-bold mb-3'>Rating</h5>
                      <div className='divider-small mb-3' />
                      <div className='amber-text fa-sm mb-1'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <a href className='ml-2 active'>
                          4 and more
                        </a>
                      </div>
                      <div className='amber-text fa-sm mb-1'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <a href className='ml-2'>
                          3 - 3,99
                        </a>
                      </div>
                      <div className='amber-text fa-sm mb-1'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <a href className='ml-2'>
                          3.00 and less
                        </a>
                      </div>
                    </div> */}
                    {/* Filter panel */}
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
              </section>
              {/*Section: Content*/}
            </div>
          </div>
        </div>
        <div className='col-8 d-flex align-items-start justify-content-center mt-5 mx-auto'>
          <div className='row'>
            {mapdata
              ? mapdata.map(book => <Book key={book._id} {...book} />)
              : null}
            {loader && <Spinner />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;
