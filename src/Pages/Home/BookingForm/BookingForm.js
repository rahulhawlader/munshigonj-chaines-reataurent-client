import React from 'react';
import './BookingForm.css'
import chef from '../../../image/sefh/png-img-2.png'

const BookingForm = () => {
 return (
  
   <div className=' booking-form-container'>
   <h2>Book Your Table Now</h2>
   <div className='row '>
    <div className='img-container col-12 col-md-6 col-lg-6'>
         <img src={chef} alt="chef" />
    </div>
    <div className='content-container col-12 col-md-6 col-lg-6'>
         <h3>reservetion</h3>
         <form>
          <div className='form-row'>
           <select name='days'>
            <option value="day-select"> 
            
            select Day
            </option>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="twesday">Twesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
           </select>

           <select name='day'>
            <option value="hours-select">Hours select</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>




           </select>

          </div>

  <div className='form-row'>

<input type="text" placeholder='Full Name' />
<input type="number" placeholder='Phone Number' />
</div>
 <div className='form-row'>
          <input type="number" placeholder='How Many Persons' min='1' />
<input type="submit" value='Booking Table'/>

          </div>
         </form>
    </div>

   </div>
   
  </div>
  
 );
};

export default BookingForm;