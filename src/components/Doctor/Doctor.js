import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'
const Doctor = (props) => {
  const {doctor_name,designation,visiting_hour,address,Mobile,img}=props.doctor
  return (
    <div className="col ">
    <div className="card h-100 border border-3 ">
      <img className="img-fluid card-img-top" src={img}  alt="..."/>
      <div className="card-body">
        <h3 className="card-title">{doctor_name}</h3>
        <p className="card-text">{designation}</p>
        <p className="card-text">Time: {visiting_hour}</p>
        <p className="card-text">Address: {address}</p>
        <p className="card-text">Mobile: {Mobile}</p>
      </div>
     <button className='custom-button ' ><Link to='/apponitment' >Take Appointment Now</Link> </button>
    </div>
  </div>
  );
};

export default Doctor;