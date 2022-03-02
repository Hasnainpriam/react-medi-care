import React from 'react';
import logo from '../../images/favicon.ico'
const Header = () => {
  return (
    <div style={{backgroundColor:'#e7d5ff'}}> 
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <a className="navbar-brand fw-bold p-lg-4" href="#">
      <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top "/>
      <span className='px-2'>Medi Care</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
       
      </ul>
   <div className=''>
   <button className="btn btn-dark ml-4" type="submit">Log in</button>
   <button className="btn btn-dark m-4" type="submit">Sign Up</button>
   </div>  
    </div>
  </div>
</nav>

    </div>
  );
};

export default Header;