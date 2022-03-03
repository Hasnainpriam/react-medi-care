import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/firebase.init";

initialAuthentication();
const useFirebase=()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const [user,setUser]=useState({});
  const [error,setError]=useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


 const handleGoogleSignin=()=>{
  signInWithPopup(auth, googleProvider)
  .then((result) => {
     setUser(result.user);
    console.log(result.user);
  }).catch((error) => {
    setError(error.message);
  });
 }

const handlePasswordChange= e =>{
  setPassword(e.target.value);
}
const handleEmailChange= e =>{
  setEmail(e.target.value);

}

 const handleRegistration=(e)=>{
   console.log(email,password);
  console.log('Inside registration');
  
  e.preventDefault()
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
  
 },[])

const logOut=()=>{
  signOut(auth).then(() => {
    setUser({})
  }).catch((error) => {
    // An error happened.
    setError(error);
    console.log(error)
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
  handlePasswordChange,
  handleEmailChange,
  logOut
}

}

export default useFirebase;