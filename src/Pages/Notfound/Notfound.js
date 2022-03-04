import React from 'react';
import { Link } from 'react-router-dom';
import notimg from '../../images/404.gif'
import './Notfound.css'
const Notfound = () => {
  return (
    <div className='notfound '>
      <h1 >404</h1>
      <br />
      <Link to='/home'><button>Back to Home</button></Link> 
<br />
      <img className='img-fluid' src={notimg}/>
      <br />
    </div>
  );
};

export default Notfound;