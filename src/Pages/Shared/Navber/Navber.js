import React from 'react';
import { useState } from 'react';
import { FaFacebookMessenger, FaPhone, FaShoppingCart} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';
import './Navber.css'


const Navber = () => {
 const [showIcons, setShowIcons]=useState(false)
 return (
  <>
  <nav className='main-nav fixed-top '>
   <div className='logo-div'>
    <h3>
     <span>R</span>estaurent
    
    </h3>

   </div>
   <div className={showIcons ? 'menu-link mobile-menu-link':'menu-link'}>
    <ul>
     <li><Link style={{color:'black'}} to="/home">Home</Link></li>
     <li><Link style={{color:'black' }}   to="/food">All Food</Link></li>
     <li><Link  style={{color:'black'}}  to="/booked">Restaurent</Link></li>
      <li><Link  style={{color:'black'}}  to="/about">about</Link></li>
      <li><Link style={{color:'black'}}  to="/contact">Contact</Link></li>
      <li><Link style={{color:'black'}}   to="/login">Login</Link></li>
     
    
    </ul>

   </div>
   {/* social-media */}
   <div className='social-dev'>
   <ul className='social-dev-destop '>
     <li>
      <Link to="#">
       <FaShoppingCart/>
       </Link>
       </li>
     <li>
      <Link to="#">
       <FaFacebookMessenger/>
       </Link>
       </li>
     <li>
      <Link to="#">
       <FaPhone/>
       </Link>
       </li>
     


     
    

   </ul>

   <div className='hambarger-menu' >
   <Link to="#" onClick={()=>setShowIcons(!showIcons)}>
    
   <GiHamburgerMenu />
    </Link> 
    

   </div>
   </div>


  </nav>
  
  
  </>
 );
};

export default Navber;