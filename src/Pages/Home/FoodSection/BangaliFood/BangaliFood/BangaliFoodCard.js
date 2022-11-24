import React from 'react';
import './BangaliFoodCard.css'
import { AiFillStar } from "react-icons/ai";

const BangaliFoodCard = ({bangaliFoods}) => {
 const {image, _id, name, price, details}=bangaliFoods;
 return (
  <div className='container main-bangali-card '>
   <div className='main-bangali-card-image-dev '>
   <img  src={image} alt="" srcset="" />
   </div>
   <div className='bangali-card'>
      <div className='bangali-card-content text-black'>
       <h3 > Name: {name}</h3>
       
       <p>{details}</p>
        <div className='detail'>
        <h4>Price: ${price}</h4>
         <h4>4.5 <span className='text-yellow'><AiFillStar/></span></h4>

        </div>

         <button>ADD TO CARD </button>
      </div>


   </div>
   
  </div>
 );
};

export default BangaliFoodCard;