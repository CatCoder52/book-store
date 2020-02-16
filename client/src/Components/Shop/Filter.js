import React from 'react'

const Filter = () => {
  return (
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
                  <li className='mb-2'>
                    <a href className>
                      Popularity
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href className>
                      Rating
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href className>
                      Price: low to high
                    </a>
                  </li>
                  <li className='mb-2'>
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
                <div className='form-check pl-0 mb-2'>
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
                <div className='form-check pl-0 mb-2'>
                  <input
                    type='radio'
                    className='form-check-input'
                    id='materialGroupExample2'
                    name='groupOfMaterialRadios'
                    defaultChecked
                  />
                  <label
                    className='form-check-label'
                    htmlFor='materialGroupExample2'
                  >
                    Laptops
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
                    Smartphones
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
                    Tablets
                  </label>
                </div>
              </div>
              {/* Filter panel */}
              {/* Filter panel */}
              <div className='mb-5'>
                <h5 className='font-weight-bold mb-3'>Price</h5>
                <div className='divider-small mb-3' />
                <form className='range-field'>
                  <input type='range' min={0} max={319} />
                </form>
                <div className='row justify-content-center'>
                  {/* Grid column */}
                  <div className='col-md-6 text-left'>
                    <p className='dark-grey-text'>
                      <strong id='resellerEarnings'>0$</strong>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className='col-md-6 text-right'>
                    <p className='dark-grey-text'>
                      <strong id='clientPrice'>319$</strong>
                    </p>
                  </div>
                  {/* Grid column */}
                </div>
              </div>
              {/* Filter panel */}
              {/* Filter panel */}
              <div className='link-black'>
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
              </div>
              {/* Filter panel */}
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </section>
        {/*Section: Content*/}
      </div>
      
    </div>
  );
}

export default Filter
