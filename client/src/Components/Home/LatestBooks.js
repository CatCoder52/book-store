import React, { Component } from 'react';
import axios from 'axios';

class LatestBooks extends Component {
  // Books State
  state = {
    books: []
  };


  async componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {

      const res = await axios.get('/catalog');

      console.log(res.data);

      this.setState({
        books: res.data
      });
  };

  render() {
    return (
      <div className='container pyy-5'>
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
          <div className='row'>{/* Grid column */}</div>
          {/* Grid row */}
        </section>
        {/*Section: Content*/}
      </div>
    );
  }
}

export default LatestBooks;
