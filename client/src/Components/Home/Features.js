import React from 'react';

const Features = () => {
  return (
    <div>
      <section className='myy-5'>
        <div className='container'>
          <div className='row justify-content-center pb-5'>
            <div className='col-12 text-center'>
              <h1>4 Sister Book Store Features</h1>
            </div>
          </div>
          <div className='row text-left align-items-center pt-5 pb-md-5'>
            <div className='col-4 col-md-5'>
              <img alt='image' className='img-fluid' src='./img/designer.svg' />
            </div>
            <div className='col-12 col-md-5 m-md-auto'>
              <h2>White Paper</h2>
              <p className='lead'>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href='www.designcoder.site'>
                  Learn More <i className='fas fa-angle-right' />
                </a>
              </p>
            </div>
          </div>
          <div className='row text-left align-items-center pt-5 pb-md-5'>
            <div className='col-4 col-md-5 m-md-auto order-md-5'>
              <img
                alt='image'
                className='img-fluid'
                src='./img/design-life.svg'
              />
            </div>
            <div className='col-12 col-md-5'>
              <h2>Technical Books</h2>
              <p className='lead'>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
              <p>
                <a href='www.designcoder.site'>
                  Learn More <i className='fas fa-angle-right' />
                </a>
              </p>
            </div>
          </div>
          <div className='row text-left align-items-center pt-5'>
            <div className='col-4 col-md-5'>
              <img
                alt='image'
                className='img-fluid'
                src='./img/design-community.svg'
              />
            </div>
            <div className='col-12 col-md-5 m-md-auto'>
              <h2>Saftware Books</h2>
              <p className='lead'>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around.
              </p>
              <p>
                <a href='www.designcoder.site'>
                  Learn More <i className='fas fa-angle-right' />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
