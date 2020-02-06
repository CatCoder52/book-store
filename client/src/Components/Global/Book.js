import React from 'react';
import LazyLoad from 'react-lazyload';
const Book = ({ image, author, price, title, summary, genre }) => {

const {first_name, family_name} = author

const authorName = `${first_name} ${family_name}`



// Genre Dynamic name, color, icon fun
let [genreName] = genre;

let category = genreName.name;

  const categoryColor = () => {
    switch (category) {
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
    switch (category) {
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
        <div className={`price-tag ${categoryColor()}`}>
          ${price}
        </div>
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
      <p className='dark-grey-text text-wrap'>{summary}</p>
      {/* Read more button */}
      <a className={`btn btn-${categoryColor()} btn-rounded btn-md`}>
        Read more
      </a>
    </div>
  );
};

export default Book;
