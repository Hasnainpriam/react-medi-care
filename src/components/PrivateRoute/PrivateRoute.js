import React from 'react';
import { render } from 'react-dom';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
 
  let {user,isLoading} = useAuth();

  if(isLoading){
    return (<div className="spinner-border m-5" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>)
  }

  console.log(user)
  return (
    user.displayName ? (
      children
    ) : (
      <Navigate to={{
        pathname:'/login' 
       }}/>
    )
  )
}


export default PrivateRoute;