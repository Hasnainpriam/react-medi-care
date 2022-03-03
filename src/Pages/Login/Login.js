import React from 'react';
import './Login.css'
import loginImg from '../../images/serviceBanner.png'
import logo from '../../images/favicon.ico'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
   const {handleGoogleSignin}= useFirebase();
  return (
    <div className='container'>

        <button onClick={handleGoogleSignin} className='btn btn-warning my-5'>Login with Google</button>
    </div>
  );
};

export default Login;