import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';

const Search = () => {
  const [book, setBook] = useState({ books: [] });

  const fetchData = async book => {
    const result = await axios.get(`/books/books?title=/${book}/i`);
    setBook(result.data);
  };

  //console.log([...book]);
  if (typeof book == {}) {
    const ebooks = book.map(i => i.title);
    console.log(ebooks);
  }

  // You can use async/await or any function that returns a Promise
  const loadPlayer = async ({ playerId }, { signal }) => {
    const res = await fetch(`/api/players/${playerId}`, {
      signal
    });
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`Submitting Name ${book}`);
    fetchData(book);
  };
  const { data, error, isPending } = useAsync({ promiseFn: loadPlayer, playerId: 1 })
    if (isPending) return 'Loading...';
    if (error) return `Something went wrong: ${error.message}`;
    if (data)
      return (
        <React.Fragment>
          <div>
            <strong>Player data:</strong>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <form className='search-ui' onSubmit={handleSubmit}>
            <input
              className='form-control w-75'
              type='text'
              placeholder='Search ex: shadow'
              aria-label='Search'
              value={book}
              onChange={e => setBook(e.target.value)}
            />
            <button
              className='btn btn-success btn-rounded btn-sm m-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </React.Fragment>
      );
};

export default Search;
