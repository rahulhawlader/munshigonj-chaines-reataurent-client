import React from 'react';
import './About.css'
import about from '../../../image/menu items/about us.png'
import spicials from '../../../image/logo/istockphoto-981368726-612x612-removebg-preview.png'
import restaurant from '../../../image/logo/Restaurant-logo-design-free-template-scaled-removebg-preview.png'
import { HiCheck} from "react-icons/hi";

const About = () => {
 return (
  <div className='container about-main-dev'>
   <div className='row jusify-content-center '>
   <div className='about-card  col-12 col-md-6 col-lg-6'>
   
   <div className='about-img-dev'>
    <img src={about} alt='about'></img>
   </div>
   
   </div>
   <div className='about-card  col-12 col-md-6 col-lg-6'>
   
   <div className='content-dev text-white'>
    <h5>About Us</h5>
    <h1>Enjoy An Exceptional Journey Of Taste</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when at layout The point of using Ipsum.</p>
    <div className='specials-div'>
     <div className='specials-div-content'>
      <img src={spicials} alt='specials'></img>
      <div>
       <h3>Speciallst</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
     </div>
     <div className='specials-div-content'>
      <img src={restaurant} alt=''></img>
      <div>
       <h3>Restaurant</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
     </div>
    </div>
      <ul>
       <li className='my-3'><HiCheck/> Mauris mattis lectus eget ligula dapibus, ac maximus ipsum Services</li>
       <li className='my-3'><HiCheck/> Aenean facilisis erat et metus semper molestie sem posuere tests</li>
       <li className='my-3'><HiCheck/> Donec sit amet lorem non mi fringilla finibus pretium veeconus</li>
      </ul>

      <button>View Our Menu</button>
   </div>
   </div>
   </div>
  </div>
 );
};

export default About;