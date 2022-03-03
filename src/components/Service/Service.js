import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const {name,rating,des,img,key}=props.service;
  return (
    <div className='col'>    
    <div className="card h-100">
      <img src={img} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title pb-2 fs-4">{name}</h5>
       <Link to={`details/${key}`}> <button className="btn btn-dark">View Details</button></Link>
      </div>
    </div>
  </div>
  );
};

export default Service;