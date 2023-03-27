import React from 'react'
import Image from '../Image/Image'
import googleLogo from '../../images/Google.svg'
import './signInWithGoogle.css'
import { useEffect } from "react";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";


export default function SignInWithGoogle() {
   const handleSignIn = () => {
     window.gapi.auth2
       .getAuthInstance()
       .signIn()
       .then(onSignIn)
       .catch((error) => {
         console.error("Error signing in:", error);
       });
   };
   async function onSignIn (googleUser) {
     let url = "http://localhost:8080/api/auth/token";
     let id_token = googleUser.getAuthResponse().id_token;
     let headers = { headers: { Authorization: `Bearer ${id_token}` } };

      try{
            await axios.post(url,null,headers)
            // toast.success("New Author Created")
        }catch(error){
            if(error.response.data === 'Unauthorized'){
                // toast.error('You need to Login')
            }else{
                if(typeof error.response.data.message === 'string'){
                //  toast.error(error.response.data.message)
                }else{
                //  error.response.data.message.forEach(err => toast.error(err))
                }
            }
        }

     // Enviar el token a tu servidor
   };

   const initGoogleAuth = () => {
     window.gapi.load("auth2", () => {
       window.gapi.auth2
         .init({
           client_id:
             "759791277322-8bfut70p5l8d1ark5gd1744ufi4am6i8.apps.googleusercontent.com",
         })
         .then(() => {
           // Ahora se puede llamar a getAuthInstance()
           console.log("Google Auth loaded");
         })
         .catch((error) => {
           console.error("Error loading Google Auth:", error);
         });
     });
   };
   useEffect(() => {
     initGoogleAuth();
   }, []);
  return (
    <Anchor to='#' onClick={handleSignIn} className="sign-in-google">
      <Image src={googleLogo} alt="" />
      <span>Sign in with Google</span>
    </Anchor>
  );
}
