import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/favicon.ico'
const Header = () => {
  const {user,logOut}=useFirebase();
  return (
    <div style={{backgroundColor:'#e7d5ff'}}> 
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
 <Link className="navbar-brand fw-bold p-lg-4" to='/home'>
  <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top "/>
      <span className='px-2'>Medi Care</span>
  </Link>
     
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to='/home' className="nav-link active"> <a  aria-current="page">Home</a></Link>
        </li>
        <li className="nav-item">
         <Link to='/doctors' className="nav-link active"> <a  aria-current="page">Doctors</a></Link>
        </li>
        <li className="nav-item">
         <Link to='/about' className="nav-link active"> <a  aria-current="page">About Us</a></Link>
        </li>
    </ul>
    {
      user.displayName?
      <span className='p-2 fw-bold'>{user.displayName}</span>:
      <span></span>
    }
   <div className=''>
 
{
  user.displayName ?
  <button onClick={logOut} className="btn btn-danger ml-4" type="submit">Log out</button> 
  :
  <>
  <Link to='/login'><button className="btn btn-dark m-4" type="submit">Log in</button></Link>
  <Link to='/register'><button className="btn btn-dark m-4" type="submit">Sign up</button></Link>
  </>
}
   
   
 </div>  
    </div>
  </div>
</nav>

    </div>
  );
};

export default Header;