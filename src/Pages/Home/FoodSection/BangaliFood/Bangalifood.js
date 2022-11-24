import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './BangaliFood.css'
import BangaliFoodCard from './BangaliFood/BangaliFoodCard';

const Bangalifood = () => {
const [bangaliFood, setBangaliFood]=useState([])


useEffect(()=>{
fetch('bangaliFood.json')
.then(res=>res.json())
.then(data=>setBangaliFood(data))
},[])
 return (
  <div className='container text-white main-bangali-section '>
   <h1 className='text-center mb-5'>Our Bangali All Items </h1>

   
   <div className=''>
   <div className='bangaliFood-responsive ' >
   {
    bangaliFood?.map(bangaliFoods=><BangaliFoodCard
     bangaliFoods={bangaliFoods}
     key={bangaliFoods._id}
    
    
    ></BangaliFoodCard>)
   }
   </div>
   </div>
  
  </div>
 );
};

export default Bangalifood;