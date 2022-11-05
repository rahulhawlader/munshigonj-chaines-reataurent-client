import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
 return (
  <div className='footerBody'>
   <footer>

<div className='waves'>
 <div className='wave' id='wave1'></div>
 <div className='wave' id='wave2'></div>
 <div className='wave' id='wave3'></div>
 <div className='wave' id='wave4'></div>
</div>


<ul className="footerSocialIocns">
<li><a href="#"> <FaFacebook/></a></li>
<li><a href="#"> <FaInstagram/></a></li>
<li><a href="#"> <FaLinkedin/></a></li>
<li><a href="#"> <FaTwitter/></a></li>

  
</ul>
<ul className='footerMenu'>
 <li><a href="">Home</a></li>
 <li><a href="">About</a></li>
 <li><a href="">Food</a></li>
 <li><a href=""> Team</a></li>
 <li><a href="">Contact</a></li>
</ul>
<p>Copyright © 2022 - All right reserved by rahul hawlader</p>
   </footer>
   </div>
 );
};

export default Footer;