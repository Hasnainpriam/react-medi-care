import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';

const Details = () => {
  const [details,setDetails]=useState([]);
useEffect(()=>{
  fetch('../deptList.json')
  .then(res=>res.json())
  .then(data=>setDetails(data))
},[])


  return (
   <div className='container'>
         <div class="row row-cols-1 row-cols-md-2 g-4 ">
       {
         details.map(detail=><Detail key={detail.key} detail={detail}></Detail>)
       }
         </div>
  </div>
    
  );
};

export default Details;