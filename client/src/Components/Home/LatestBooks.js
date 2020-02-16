import React from 'react';
import useAxios from 'axios-hooks';
import Book from '../Global/Book';
import Spinner from '../Global/Spinner';

const LatestBooks = () => {
  // Books State
  const [{ data, loading, error }, refetch] = useAxios('/books/books?limit=3');

  if (error) return <p>Error!</p>;

    return (
      <div className='container myy-5'>
        {/*Section: Content*/}
        <section className='dark-grey-text text-center'>
          {/* Section heading */}
          <h2 className='font-weight-bold mb-4 pb-2'>Recent Books</h2>
          {/* Section description */}
          <p className='text-center mx-auto w-responsive mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          {/* Grid row */}
          <div className='row'>
            {!loading ? (
              data.map(book => <Book key={book._id} {...book} />)
            ) : (
              <Spinner />
            )}
          </div>
          {/* Grid row */}
        </section>
        {/*Section: Content*/}
      </div>
    );
}

export default LatestBooks;
