import React from 'react';
import about1 from '../../images/about1.png'
import about2 from '../../images/about2.jpg'
import './About.css'
const About = () => {
  return (
    <div className='container about my-5'>
      <div className='row'>
         <div className='col-lg-6 col-sm-12 '>
              <img className='h-75 img-fluid' src={about1} alt="" />
         </div>
         <div className='col-lg-6 col-sm-12 text-start'>
            <h1 className='animate__animated  animate__backInRight'>ABOUT US</h1>
            <p>It is indeed a great pleasure for me to introduce our brand new state – of – the -art technology hospital in the region of Chittagong. Nowadays, if anyone needs good treatment, they need to look forward to Dhaka or Abroad. Because good and well facilitated hospitals are not available in the port city of Chittagong.
The pursuit of excellence in all these areas is the result of our willingness, commitment, dedication and strong moral determination to provide the highest quality of care.</p>
         <br />
         <br />
         <h1 className='animate__animated  animate__backInRight'>WORKING HOURS</h1>
         <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">DAY</th>
      <th scope="col">OPEN</th>
      <th scope="col">CLOSE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mon-Wed</td>
      <td>10:00am</td>
      <td>	09:00pm</td>
    </tr>
    <tr>
     
      <td>Thu-Fri</td>
      <td>09:00am</td>
      <td>10:30pm</td>
    </tr>
    <tr>
     
      <td>Sat-Sun</td>
      <td>09:30am</td>
      <td>08:30pm</td>
    </tr>
   
  </tbody>
</table>
         </div>
      </div>
      <div className='row'>
      <div className='col-lg-6 text-start'>
            <h1 className='animate__animated  animate__backInLeft'>FACILITIES</h1>
            <p>Patients have effective and timely access to care, including appointments, tests, treatment and move out of the hospital. Services are tailored to meet the needs of individual patients, including vulnerable patients. The world class department of laboratory service at Parkview Hospitals offers 24 hours a day and 7 days a week services in all branches of Laboratory Medicine. At the beginning 100 inpatient Bed.</p>      
         </div>
         <div className='col-lg-6 '>
              <img className='h-75 img-fluid' src={about2}  alt="" />
         </div>
         
      </div>
      <div className='d-flex justify-content-evenly align-items-center counter'>
        <div>
          <div  className='mb-2 myIcon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg></div>
          <h1 className='text-dark'>584</h1>
          <h5>Hospital Rooms</h5>
        </div>
        <div>
          <div className='mb-2 myIcon '>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
          </div>
          <h1  className='text-dark'>114</h1>
          <h5>Specialist Doctors</h5>
        </div>
        <div>
        <div className='mb-2 myIcon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg></div>
          <h1  className='text-dark'>9584</h1>
          <h5>Happy Patients</h5>
        </div>
        <div>
          <div className='mb-2 myIcon'>   
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg>
          </div>
          <h1  className='text-dark'>14</h1>
          <h5>Years of Experience</h5>
        </div>
      </div>
    </div>
  );
};

export default About;