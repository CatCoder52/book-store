import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom'


const Book = ({ url, image, author, price, title, summary, genre} ) => {

const {first_name, family_name} = author

const authorName = `${first_name} ${family_name}`


// Genre Dynamic name, color, icon fun
//const category = genre.map(g => g.name);

const category = genre.map(g => g.name);

  const categoryColor = () => {
const categoryx = [...new Set(category)];

    switch (categoryx[0]) {  
      case 'Fantasy':
        return 'pink';
        break;
      case 'Science Fiction':
        return 'deep-orange';
        break;
      case 'Horror':
        return 'blue';
        break;

      default:
        break;
    }
  };

  const categoryIcon = () => {
  const categoryx = [...new Set(category)];
    switch (categoryx[0]) {
      case 'Fantasy':
        return 'fa-book';
        break;
      case 'Science Fiction':
        return 'fa-book-dead';
        break;
      case 'Horror':
        return 'fa-atlas';
        break;

      default:
        break;
    }
  };

  return (
    <div className='col-lg-4 col-md-12 mb-4'>
      <div className='overlay rounded shadow mb-4'>
        <LazyLoad>
          <img className='img-book' src={image} alt='Sample image' />
        </LazyLoad>
        <div className={`price-tag ${categoryColor()}`}>${price}</div>
        <a>
          <div className='mask rgba-white-slight' />
        </a>
      </div>
      <a href='#!' className='pink-text'>
        <h6 className={`font-weight-bold mb-3 ${categoryColor()}-text`}>
          <i className={`fas ${categoryIcon()} pr-2`} />
          {category}
        </h6>
      </a>
      <h4 className='font-weight-bold mb-3'>
        <strong>{title}</strong>
      </h4>
      <p>
        by <a className='font-weight-bold'>{authorName}</a>
      </p>
      <p className='dark-grey-text text-wrap text-left'>{summary}</p>
      {/* Read more button */}
      <Link
        to={url}
        className={`btn btn-${categoryColor()} btn-rounded btn-md`}
      >
        Read more
      </Link>
    </div>
  );
};

export default Book;
