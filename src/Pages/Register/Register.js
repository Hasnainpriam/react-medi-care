import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
  const {handleRegistration,handleNameChange,handleEmailChange,handlePasswordChange,handleGoogleSignin,error}=useAuth()
  return (
    <div className='container w-50 py-5'>
      <h1 className='mb-5'>Register</h1>
      <form onSubmit={handleRegistration}>
  <div className="row mb-3">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label fw-bold" >Name</label>
    <div className="col-sm-10">
      <input onBlur={handleNameChange} type="text" placeholder='Your Name' required className="form-control" id="inputName3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold" >Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" placeholder='Email Address' required className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold" >Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" placeholder='Password' required className="form-control" id="inputPassword3"/>
    </div>
  </div>
 
  <div className='text-danger'>{error}</div>
  <button type="submit" className="btn btn-primary">Register</button>
</form>

<div className='my-2'>-----------OR-----------</div>
<button onClick={handleGoogleSignin} className='btn btn-warning'>Login with Google</button>

<br />
<br />
 <small>Already Registered ? <Link to='/login'>Log in</Link> </small>
    </div>
  );
};

export default Register;