import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png'
import './Banner.css'
const Banner = () => {
  return (
    <div >
        <div className="banner row d-flex justify-content-center align-items-center w-100 m-0">
        <div className="col col-lg-6 col-md-12">
          <h1 className='fw-lg-bold fw-md-light' >Let Us Brighten Your Smile</h1>
      <br />
         <Link to='/apponitment'><button type="button" className="btn btn-dark" >Book Now</button></Link> 
        </div>
        <div className="col col-lg-6 col-md-12">  
          <img className='img-fluid' src={banner} alt="" />
        </div>
        </div>
    </div>
   
  );
};

export default Banner;