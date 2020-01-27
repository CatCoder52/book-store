import React, { Component } from 'react';
import { notification, Icon } from 'antd';

const initState = {
  email: ''
};

class Subscribe extends Component {

  state = { ...initState };

  //  Clear all state/fields values
  clearState = () => {
    this.setState({ ...initState });
  };
  // Notification
  openNotification = () => {
    this.clearState();
    notification.open({
      top: 220,
      message: 'Successfully Subscribed',
      description: 'Thanks for subscribing our newsletter',
      icon: <Icon type='check-circle' theme='twoTone' twoToneColor='#52c41a' />
    });
  };

  //  Form validation
  validateForm = () => {
    const {email } = this.state;
    const isInvalid = !email;
    return isInvalid;
  };

  //  Get the typed values
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    const { email } = this.state;

    return (
      <div className='myy-5'>
        <div className='mask red lighten-5'>
          <div className='container pyy-5'>
            {/* Grid row */}
            <div className='row align-items-center'>
              {/* Grid column */}
              <div className='col-lg-6'>
                <h3 className='font-weight-bold gray-text pb-2'>
                  Stay Updated
                </h3>
                <p className='lead gray-text pt-2 mb-5'>
                  Subscribe to our newsletter to be always aware of our new. We
                  build powerful and flexible templates for startups.
                </p>
                <form
                  className='col-md-9 input-grey pl-0 mb-md-5 mb-sm-5'
                  action
                  method='post'
                  target='_blank'
                >
                  <div className='input-group mb-3'>
                    <input
                      required
                      type='email'
                      name='email'
                      className='form-control form-control-lg rgba-white-light white-text border-0 z-depth-0'
                      placeholder='Email Address'
                      value={email}
                      onChange={this.handleChange}
                    />
                    <div className='input-group-append'>
                      <button
                        className='btn btn-outline-primary btn-rounded waves-effect m-0 px-3 py-2 z-depth-0'
                        type='button'
                        id='button-addon2'
                        disabled={this.validateForm()}
                        onClick={this.openNotification}
                      >
                        Sign up
                        <i className='fas fa-arrow-right pl-2' />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className='col-lg-4 offset-lg-2'>
                <img
                  src='./img/6.jpg'
                  alt='Sample image'
                  className='img-fluid shadow-lg ml-sm-3'
                />
                <img
                  src='./img/circle-shape.png'
                  alt='Sample image'
                  className='features-image rotateme img-fluid'
                />
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </div>
        {/* Section */}
      </div>
    );
  }
}

export default Subscribe;
