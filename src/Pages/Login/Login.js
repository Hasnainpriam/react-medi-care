import React from 'react';
import './Login.css'
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
   const {handleResetPassword,handleGoogleSignin,handleRegularLogin,error,handleEmailChange,handlePasswordChange}= useAuth()
 
   return (
    <div className='container'>
         <div className='container w-50 py-5'>
      <h1 className='mb-5'>Login</h1>
      <form onSubmit={handleRegularLogin}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold" >Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" required className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold" >Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" required className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div className='text-danger'>{error}</div>
  <button type="submit" className="btn btn-primary">Log in</button>
</form>

<div className='my-2'>-----------OR-----------</div>
<button onClick={handleGoogleSignin} className='btn btn-warning'>Login with Google</button>
<br />
<br />
  <button onClick={handleResetPassword} className='pass-button'>Forgot Password ?</button> 
  <br /><br />
 <small>Don't have an account ? <Link to='/register'>Create Account</Link> </small>
    </div>
    </div>
  );
};

export default Login;