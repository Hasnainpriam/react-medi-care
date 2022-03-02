import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
     fetch('./deptList.json')
     .then(res=>res.json())
     .then(data=>setServices(data))
  },[])

  return (
    <div className='container mb-3'>
      <h1 className='my-lg-5 fs-lg-1'>Our Services</h1>
      
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
    
          {
               services.map(service=><Service key={service.key} service={service}></Service>)
             }
  
             
        </div>
      </div>
  );
};

export default Services;<h1>Our Services</h1>