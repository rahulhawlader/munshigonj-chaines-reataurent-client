import React from 'react';
import './OurTeam.css'
import boys from '../../../image/sefh/1-5.jpg';
import girls from '../../../image/sefh/2.jpg';
import boysT from '../../../image/sefh/3-2.jpg';

const OurTeam = () => {
 return (
  <div className='container main-ourTeamCart'>
   <h3 className='text-center text-white'>Team Of Restaurant</h3>
   <h1 className='text-center text-white mb-5'>
Meet Our Professionals</h1>
   <div className='row justify-content-center'>
         <div className='ourTeamCart col-12 col-md-6 col-lg-4'>
          <div className='ourTeamCart-img'>
           <img src={boys} alt="" />
          </div>
          <div className='ourTeamCart-content'>
           <h2 className='text-center'>Alex John</h2>
           <h3 className='text-center'>Chines</h3>
          </div>
         </div >
         <div className='ourTeamCart col-12 col-md-6 col-lg-4'>
          <div className='ourTeamCart-img'>
           <img src={girls} alt="" />
          </div>
          <div className='ourTeamCart-content'>
           <h2 className='text-center'>Danials FranKie</h2>
           <h3 className='text-center'>Thailand</h3>
          </div>
         </div>
         <div className='ourTeamCart col-12 col-md-6 col-lg-4'>
          <div className='ourTeamCart-img'>
           <img src={boysT} alt="" />
          </div>
          <div className='ourTeamCart-content'>
           <h2 className='text-center'>Michal Smart</h2>
           <h3 className='text-center'>Indian</h3>
          </div>
         </div>
   </div>
  </div>
 );
};

export default OurTeam;