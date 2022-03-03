import React, { useEffect, useState } from 'react';
import Doctor from '../../components/Doctor/Doctor';

const Doctors = () => {
  const [doctors,setDoctors]=useState([]);
  useEffect(()=>{
    fetch('./doctorList.json')
    .then(res=>res.json())
    .then(data=>setDoctors(data))
  },[])
  return (
    <div className='container '>
      <h1 className='fw-bolder display-5 mt-5 animate__animated animate__flip ' style={{color:'#6d0fbd'}}>Our Doctors</h1>
      <span className="divider mb-3 mt-2"></span>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
  {
    doctors.map(doctor=><Doctor key={doctor.key} doctor={doctor}></Doctor>)
  }
      </div>
    </div>
  );
};

export default Doctors;