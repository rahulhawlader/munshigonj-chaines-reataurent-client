import React from 'react';
import { BsFillSuitHeartFill } from "react-icons/bs";
import blogOne from '../../../image/blogs/10.jpg';
import blogTwo from '../../../image/blogs/11.jpg';
import blogThree from '../../../image/blogs/12-1 (1).jpg';
import './Blogs.css'

const Blogs = () => {
 return (
  <div className='container'>
   <div className='main-blogs-section'>
    <h2 className=' heading'>Our New Blogs</h2>
    <div className='blogs-container'>
     <div className="blogs-box blogs-shadow">
      <div className='blogs-img-dev'>
       <img src={blogOne} alt=""  />
       <h3><span><BsFillSuitHeartFill/></span> 105</h3>
      </div>
      <div className='blogs-content-dev'>
       <h3>Do You Went Your Blog To Stand Alone Or Support  Another Site?</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, vero.</p>
       <a href="#" className='btn'>Read More</a>

      </div>
     </div>
    
    
    
     <div className="blogs-box blogs-shadow">
      <div className='blogs-img-dev'>
       <img src={blogTwo} alt=""  />
       <h3><span><BsFillSuitHeartFill/></span> 100</h3>
      </div>
      <div className='blogs-content-dev'>
       <h3>Do You Went Your Blog To Stand Alone Or Support  Another Site?</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, vero.</p>
       <a href="" className='btn'>Read More</a>

      </div>
     </div>
     
     
     
     
     <div className="blogs-box blogs-shadow">
      <div className='blogs-img-dev'>
       <img src={blogThree} alt=""  />
       <h3><span><BsFillSuitHeartFill/></span> 90</h3>
      </div>
      <div className='blogs-content-dev'>
       <h3>Do You Went Your Blog To Stand Alone Or Support  Another Site?</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, vero.</p>
       <a href="" className='btn'>Read More</a>

      </div>
     </div>

    </div>


   </div>
  </div>
 );
};

export default Blogs;