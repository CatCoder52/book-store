import React, { useState } from 'react';

//import LazyLoad from 'react-lazyload';
import axios from 'axios';

import Banner from './../Components/Global/Banner';
import Book from './../Components/Global/Book';
import Filter from './../Components/Shop/Filter';
import Spinner from '../Components/Global/Spinner';

const Shop = () => {
  const [data, setData] = useState(null);
  const [mapdata, setMapdata] = useState();
  const [loader, setLoader] = useState(false);

  //Search data GET
  const searchData = async () => {
    try {
      const response = await axios.get(`/books/books?title=/${data}/i`);
      console.log(response);
      const datareq = await response.data;

      setMapdata(datareq);
      setLoader(false);
    } catch (error) {
      console.log(error.toJSON());
    }
  };

  const handleSubmit = () => {
    searchData();
    setLoader(true);
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
            onChange={e => setData(e.target.value)}
          />
          <button
            className='btn btn-success btn-rounded btn-sm m-0'
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>

      <div className='row m-0'>
        <div className='col-2'>
          <Filter />
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
