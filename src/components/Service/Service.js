import React from 'react';

const Service = (props) => {
  const {name,rating,des,img}=props.service;
  console.log(props)
  return (
    <div className='col'>    
    <div className="card h-100">
      <img src={img} className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title pb-2 fs-4">{name}</h5>
        <button className="btn btn-dark">View Details</button>
      </div>
    </div>
  </div>
  );
};

export default Service;