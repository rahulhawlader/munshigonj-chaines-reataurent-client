import React from 'react';
import './Booking.css'
import table from '../../../image/menu items/table.png'
import kitChent from '../../../image/menu items/our kitchen.png'
import menu from '../../../image/menu items/our menu.png'

const Booking = () => {
 return (
  <div className='booking-main-part'>
   <h1 className='text-center text-white'> Booking</h1>
   <div className='row styless justify-content-center g-5'>
    <div className='card-box col-12 col-md-6 col-lg-4 '>
     <div className='img-dev'>
       <img src={table} alt='table'></img>
     </div>
       <button>Booking Table</button>
    </div>
    <div className='card-box col-12 col-md-6 col-lg-4 mt-5'>
     <div className='img-dev'>
       <img src={menu } alt='table'></img>
     </div>
       <button>Our Menu</button>
    </div>
    <div className='card-box col-12 col-md-6 col-lg-4 mt-5'>
     <div className='img-dev'>
       <img src={kitChent} alt='table'></img>
     </div>
       <button>Our Kitchen</button>
    </div>

   </div>
   
  </div>
 );
};

export default Booking;