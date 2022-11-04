import React from 'react';
import './Service.css'
import service from '../../../image/menu items/1-4.jpg'

const Service = () => {
 return (
  <div className='container'>
   <div className='row service-main-dev justify-content-center'>
    <div className='servces-containet col-12 col-md-6 col-lg-6'>
       <h5>services</h5>
       <h1>Choose Your Best Food From Categories</h1>
    </div>
    <div className='servces-img-dev col-12 col-md-6 col-lg-6'>
      <img src={service} alt="services pictures" />

    </div>
   </div>
  </div>
 );
};

export default Service;