import React from 'react';
import About from '../About/About';
import BennerOne from '../Benner/BennerOne';
import Blogs from '../Blogs/Blogs';
import Booking from '../Booking/Booking';
import BookingForm from '../BookingForm/BookingForm';

import FoodSection from '../FoodSection/FoodSection';
import Location from '../Location/Location';
import MenuAllItems from '../MenuAllItems/MenuAllItems';
import OurTeam from '../OurTeam/OurTeam';
import Review from '../Review/Review';
import Service from '../Service-section/Service';

const Home = () => {
 return (
  <div>
   
   <BennerOne/>
    <Booking/>
    <About/>
     <Service/>
    <FoodSection/>
   <BookingForm/>
   <OurTeam/>
   <MenuAllItems/>
   <Review/>
   <Location/>
   <Blogs/>
   
   
   
   
   
   
   
   

   
  </div>
 );
};

export default Home;