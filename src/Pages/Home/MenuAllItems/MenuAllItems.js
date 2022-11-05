import React from 'react';
import './MenuAllItems.css'

const MenuAllItems = () => {
 return (
  <div className='container  main-menu-items'>
   <h2 className='text-center text-info '>Our All Items Catagories</h2>
      <div className='menu-main-items row text-center'>
         <div className='menu-card col-6 col-md-6 col-lg-3 '>
            <h1 className=''>59+</h1>
                 <h4 className='text-white'>Breakfast Option</h4>

         </div>
         <div className='menu-card col-6 col-md-6 col-lg-3'>
            <h1 className=''>25+</h1>
                 <h4 className='text-white'>Year Of Experience</h4>

         </div>
         <div className='menu-card col-6 col-md-6 col-lg-3'>
            <h1 className=''>50+</h1>
                 <h4 className='text-white'>Table Available</h4>

         </div>
         <div className='menu-card col-6 col-md-6 col-lg-3'>
            <h1 className=''>100+</h1>
                 <h4 className='text-white'>Dinner Option</h4>

         </div>
      </div>
  </div>
 );
};

export default MenuAllItems;