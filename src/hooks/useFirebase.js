import { getAuth, signInWithPopup,updateProfile,sendPasswordResetEmail,sendEmailVerification, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import initialAuthentication from "../Firebase/firebase.init";

initialAuthentication();
const useFirebase=()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const [user,setUser]=useState({});
  const [error,setError]=useState('');
  const [isLoading,setisLoading]=useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  
 const handleGoogleSignin=()=>{
  setisLoading(true)
  signInWithPopup(auth, googleProvider)
   .then((result) => {
    setUser(result.user);
    console.log(result.user);
   }).catch((error) => {
    setError(error.message);
  }).finally(()=>{
    setisLoading(false);
  });
  
 }

const handlePasswordChange= e =>{
  setPassword(e.target.value);
}
const handleEmailChange= e =>{
  setEmail(e.target.value);
}
const handleNameChange=(e)=>{
  setName(e.target.value)
}

 const handleRegistration=(e)=>{
   e.preventDefault()
   console.log(email,password);
  
  console.log('Inside registration');
  if(password.length<6){
    setError('Password must be 6 character long');
    return ;
  }
  // Ensure string has two uppercase letters.
if(!/(?=.*[A-Z].*[A-Z])/.test(password))
{
  setError('Ensure string has two uppercase letters');
  return ;
}

  createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    const user=result.user
   
     setError('');
    //  verifyEmail();
     setUserName();

     console.log(user)
  })
  .catch((error) => {
   setError(error.message);
  });

 }

const setUserName=()=>{
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

// const verifyEmail=()=>{
//   sendEmailVerification(auth.currentUser)
//   .then((result) => {
     
//      setError('Check Your Email to verify this account.')
//   });
// }

const handleResetPassword=()=>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    setError('We have sent you a link for changing your password.Please check your Email')
  })
  .catch((error) => {
    const errorMessage = error.message;
   setError('For changing password enter you email address on the input field')
  });

}

const handleRegularLogin=(e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    setUser(user)
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });

}

 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      // User is signed out
      // ...
    }
  });
  setisLoading(false)
 },[ ])

const logOut=()=>{
  signOut(auth).then(() => {
    setUser({})
  }).catch((error) => {
    // An error happened.
    setError(error);
    console.log(error)
  }).finally(()=>{
    setisLoading(false);
  });
}


return {
  user,
  error,
  email,
  password,
  name,
  handleGoogleSignin,
  handleRegistration,
  handleRegularLogin,
  handleResetPassword,
  handlePasswordChange,
  handleEmailChange,
  handleNameChange,
  logOut,
  isLoading
}

}

export default useFirebase;