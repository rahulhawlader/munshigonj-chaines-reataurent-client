import React from 'react';
import About from '../About/About';
import BennerOne from '../Benner/BennerOne';
import Booking from '../Booking/Booking';
import BookingForm from '../BookingForm/BookingForm';

import FoodSection from '../FoodSection/FoodSection';
import OurTeam from '../OurTeam/OurTeam';
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
   
   
   
   
   

   
  </div>
 );
};

export default Home;