import React from 'react';

import { Link } from 'react-router-dom';
import './FoodSection.css'

const FoodSection = () => {
 return (
  <div className='main-section '>
   <h3 className='text-center text-white'>Selected Menu</h3>
   <h1 className='text-center text-white mb-5'> Our Specialties </h1>
   <div className='row justify-content-center '>
    <div className='card-main col-12 col-md-6 col-lg-4'>
    <div className='box'>
     <div className='content text-white'>
      <h1> 01</h1>
      <h3>Bangali Food</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio. Possimus hic nihil quisquam sunt sequi error distinctio laboriosam a.</p>
      <button><Link to="/bangali">Order</Link></button>
      
     </div>
    </div>



    </div>
   
   
   
   
   
    <div className='card-main col-12 col-md-6 col-lg-4'>
    <div className='box'>
     <div className='content text-white'>
     <h1> 02</h1>
      <h3>Chaines Food</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio. Possimus hic nihil quisquam sunt sequi error distinctio laboriosam a.</p>
      <button><Link to="/chaines">Order</Link></button>
     </div>
    </div>



    </div>
    
    
    
    <div className='card-main col-12 col-md-6 col-lg-4 '>
    <div className='box'>
     <div className='content text-white'>
     <h1> 03</h1>
      <h3>Thai Food</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, optio. Possimus hic nihil quisquam sunt sequi error distinctio laboriosam a.</p>
      <button><Link to="/thai">Order</Link></button>
     </div>
    </div>



    </div>
    
   

   </div>
  </div>
 );
};

export default FoodSection;