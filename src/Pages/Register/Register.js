import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
  const {handleRegistration,handleEmailChange,handlePasswordChange}=useFirebase();
  return (
    <div className='container w-50 py-5'>
      <h1>Register</h1>
      <form onSubmit={handleRegistration}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" required className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" >Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" required className="form-control" id="inputPassword3"/>
    </div>
  </div>
 
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
    </div>
  );
};

export default Register;