import React from 'react';
import './Review.css'
import background from '../../../image/sefh/2-4.jpg'
import { IoIosStar } from "react-icons/io";
import boyRone from '../../../image/review/1.png'
import girlRone from '../../../image/review/2..png'
// import boyRTwo from '../../../image/review/5.png'

const Review = () => {
 return (
  <div className=''>
   <div className='review-main-dev'>
    <div className='reviews-img-dev'>
      <img src={background} alt='background'></img>
    </div>
    <div className='reviews-content-dev' >
     <h5>Customer Feedback</h5>
     <h1>What Our Happy Customer </h1>
     <h1>Say About Us</h1>
    </div>

   </div>

   <div className='row review-card-main '>
    <div className='review-card col-12 col-md-6 col-lg-6'>
     <div className='review-star-dev'>

     <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
     </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repudiandae fugiat quo harum ut mollitia pariatur </p>
     <div className='review-details-dev'>
      <div><img src={boyRone} alt="boy one pic"  />
      
      </div>
      <div>
       <h2 className='name'>Michal Smart</h2>
       <h3 className='job'>cook</h3>
      </div>
     </div>
    </div>
    <div className='review-card col-12 col-md-6 col-lg-6 girls-section-review'>
     <div className='review-star-dev'>
     <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>

     </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repudiandae fugiat quo harum ut mollitia pariatur ?</p>
     <div className='review-details-dev '>
      <div><img src={girlRone} alt=""  /></div>
      <div>
       <h2 className='name'>Naidan Smith </h2>
       <h3 className='job'>cook</h3>
      </div>
     </div>
    </div>
    {/* <div className='review-card col-12 col-md-6 col-lg-4'>
     <div className='review-star-dev'>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
      <IoIosStar/>
     </div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repudiandae fugiat quo harum ut mollitia pariatur voluptates reiciendis, officia deserunt?</p>
     <div className='review-details-dev'>
      <div><img src={boyRTwo} alt=""  /></div>
      <div>
       <h2 className='name'>Danial Franke</h2>
       <h3 className='job'>cook</h3>
      </div>
     </div>
    </div> */}
   </div>
   
  </div>
 );
};

export default Review;