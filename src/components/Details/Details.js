import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  let {deptId} = useParams();
  const [detail,setDetail]=useState([]);
  const [findDetail,setFindDetail]=useState([]);
  console.log(parseInt(deptId))
useEffect(()=>{
  fetch('../deptList.json')
  .then(res=>res.json())
  .then(data=>setDetail(data))
},[])

useEffect(()=>{
  let found =  detail.find(d => d.key === parseInt(deptId))
  setFindDetail(found)
},[detail])

  return (
    <div className='container w-75 mt-5'>
      <div className="card mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={findDetail?.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Department : {findDetail?.name}</h5>
        <p className="card-text">{findDetail?.des}</p>
        <p className="card-text"><small className="text-muted">Rating : {findDetail?.rating}</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default Details;