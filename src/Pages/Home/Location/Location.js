import React from 'react';
import './Location.css'
import {  } from "react-icons/hi2";
import { HiLocationMarker } from 'react-icons/hi';
import { BsFacebook, BsFillTelephoneInboundFill, BsInstagram, BsLinkedin, BsMessenger, BsTwitter } from "react-icons/bs";

const Location = () => {
 return (
  <div className='location-boy-dev'>
   <div className='contact-us'>
    <div className='title'>
    <h2 className=''> Get In Touch</h2>

    </div>
     <div className='contact-box'>
      <div className='contact form'>
       {/* form */}
       <h3>Send a Message</h3>
       <form >
      <div className='formBox'>
       <div className="row50">
        <div className="inputBox">
         <span>First Name</span>
         <input type="text" placeholder='Your first Name'/>
        </div>
        <div className="inputBox">
         <span>Last Name</span>
         <input type="text" placeholder='Your Last Name'/>
        </div>
       </div>
       <div className="row50">
        <div className="inputBox">
         <span>Your Email</span>
         <input type="email" placeholder='Your Email'/>
        </div>
        <div className="inputBox">
         <span>Mobile</span>
         <input type="number" placeholder='Your Phone Number'/>
        </div>
       </div>
       <div className="row100">
        <div className="inputBox">
         <span>Message</span>
         <textarea  placeholder='write your message'></textarea>
        </div>
        
       </div>
       <div className="row100">
        <div className="inputBox">
         
         <input type="submit"  value="Send"/>
        </div>
        
       </div>

      </div>




       </form>
      </div>



      {/* info*/}
      <div className='contact info'>
      <h3>Contact info</h3>
      <div className='infoBox'>
       <div>
        <span><HiLocationMarker/></span>
        <p>Munshigonnj Sirajdikhann, Dhaka Bangladesh</p>
       </div>
        <div>
         <span><BsMessenger/></span>
         <a href="hawladerrahul8@gmail.com"> hawladerrahul8@gmail.com</a>
        </div>
        <div>
         <span><BsFillTelephoneInboundFill/></span>
         <a href="phone:01726132222"> 01726132222</a>
        </div>
        <ul className='sci'>

         <li><a href='#'><BsFacebook/>  </a></li>
         <li><a href='#'><BsTwitter/>  </a></li>
         <li><a href='#'><BsLinkedin/> </a> </li>
         <li><a href='#'><BsInstagram/> </a></li>
         
        </ul>
      </div>



      </div>


      {/* map */}
      <div className='contact map'>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19527.256741558045!2d90.37515226615764!3d23.56022023651474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755a4b07d8d72d7%3A0x1225eecf681486d5!2sIchapura%20-%20Sirajdikhan%20Rd!5e0!3m2!1sen!2sbd!4v1667629252114!5m2!1sen!2sbd"   style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      
      

     </div>
       
   </div>
   
  </div>
 );
};

export default Location;