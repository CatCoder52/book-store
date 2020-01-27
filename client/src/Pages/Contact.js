import React, { Component } from 'react';
import { Form, Icon, Input, notification } from 'antd';
import LazyLoad from 'react-lazyload';

const { TextArea } = Input;

class Contact extends Component {
  // Form submit & Validation
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
     let name = values.name;
      if (!err) {
        this.openNotification(name);
      }
    });
  };

  // Notification
  openNotification = (name) => {
    notification.open({
      top: 220,
      message: `Hey ${name}`,
      description: 'We will reach you soon. Best of luck!',
      icon: <Icon type='check-circle' theme='twoTone' twoToneColor='#52c41a' />
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
        <div className='mt-5'>
          {/*Section: Content*/}
          <section className='text-center'>
            {/* Featured image */}
            <div className='view'>
              <LazyLoad>
                <img
                  src='./img/book-cover.jpg'
                  className='img-fluid z-depth-1 rounded mb-4 w-100 vh-100 z-1'
                  alt
                />
              </LazyLoad>
              <div class='mask flex-center orangee-gradient-rgba z-9'>
                {/* Grid column */}
                <div className='col-lg-12 col-md-12 col-sm-12 text-center z-10 '>
                  <ul className='list-unstyled mb-0 d-flex justify-content-evenly'>
                    <li>
                      <i className='fas fa-map-marker-alt fa-2x white-text' />
                      <p className='white-text'>San Francisco, CA</p>
                    </li>
                    <li>
                      <i className='fas fa-phone fa-2x white-text' />
                      <p className='white-text'>+8801736781616</p>
                    </li>
                    <li>
                      <i className='fas fa-envelope fa-2x white-text' />
                      <p className='mb-3 white-text'>
                        syed.simanta10@gmail.com
                      </p>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
              </div>
            </div>
          </section>
          {/*Section: Content*/}
        </div>

        <Form onSubmit={this.handleSubmit} className='myy-5'>
          <div className='container-xy my-5 py-5 shadow'>
            {/*Section: Content*/}
            <section className='text-center px-md-5 mx-md-5 dark-grey-text'>
              {/* Section heading */}
              <h3 className='font-weight-bold mb-4'>
                Contact <strong className='deep-orange-text'>Us</strong>
              </h3>
              {/* Interactions */}
              <div className='social-buttons smooth-scroll mb-5'>
                {/*Facebook*/}
                <button type='button' className='btn btn-sm btn-fb my-0'>
                  <i className='fab fa-facebook-f' />
                </button>
                {/*Twitter*/}
                <button type='button' className='btn btn-sm btn-tw my-0'>
                  <i className='fab fa-twitter' />
                </button>
                {/*Twitter*/}
                <button type='button' className='btn btn-sm btn-li my-0'>
                  <i className='fab fa-linkedin-in' />
                </button>
              </div>
              {/* Interactions */}
              {/* Section description */}
              <p className='text-center w-responsive mx-auto mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
              {/* Grid row */}
              <div className='row'>
                {/* Grid column */}
                <div className='col-md-9 mb-md-0 mb-5 mx-auto'>
                  <form>
                    {/* Grid row */}
                    <div className='row'>
                      {/* Grid column */}
                      <div className='col-md-6'>
                        <div className='md-form mb-0'>
                          <Form.Item>
                            {getFieldDecorator('name', {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your nickname!',
                                  whitespace: true
                                }
                              ]
                            })(
                              <Input
                                prefix={
                                  <Icon
                                    type='user'
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                  />
                                }
                                placeholder='Name'
                              />
                            )}
                          </Form.Item>
                        </div>
                      </div>
                      {/* Grid column */}
                      {/* Grid column */}
                      <div className='col-md-6'>
                        <div className='md-form mb-0'>
                          <Form.Item>
                            {getFieldDecorator('email', {
                              rules: [
                                {
                                  type: 'email',
                                  message: 'The input is not valid E-mail!'
                                },
                                {
                                  required: true,
                                  message: 'Please input your E-mail!'
                                }
                              ]
                            })(
                              <Input
                                prefix={
                                  <Icon
                                    type='mail'
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                  />
                                }
                                placeholder='E-mail'
                              />
                            )}
                          </Form.Item>
                        </div>
                      </div>
                      {/* Grid column */}
                    </div>
                    {/* Grid row */}

                    {/* Grid row */}
                    {/* Grid row */}
                    <div className='row'>
                      {/* Grid column */}
                      <div className='col-md-12'>
                        <div className='md-form'>
                          <TextArea rows={6} />
                        </div>
                      </div>
                      {/* Grid column */}
                    </div>
                    {/* Grid row */}
                  </form>
                  <div className='text-center text-md-left'>
                    <button
                      className='btn btn-outline-primary btn-rounded waves-effect hoverable'
                      htmlType='submit'
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </section>
            {/*Section: Content*/}
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default Contact = Form.create({ name: 'normal_login' })(Contact);
