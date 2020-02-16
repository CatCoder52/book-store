import React from 'react'
import { Spin } from 'antd';

const Spinner = () => {
  return (
    <div className='row center'>
        <Spin size='large' tip='loading...' />
    </div>
  );
}

export default Spinner
