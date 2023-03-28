import React from 'react'
import email from '../../images/@.svg'
import lock from '../../images/lock.svg'
import RegisterFieldset from '../RegisterFieldset/RegisterFieldset'
import SignBtn from '../SignBtn/SignBtn'
import GoBackToHome from '../GoBackToHome/GoBackToHome'
import { Link as Anchor } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from 'react-router-dom'
import './loginForm.css'

export default function LoginForm({ renderRegister }) {
  const navigate = useNavigate();
  let dataForm = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    let formInputs = []

    Object.values(dataForm.current).forEach(e => {
      if (e.name) {
        formInputs.push(e)
      }
    })

    let data = {
      [formInputs[0].name]: formInputs[0].value,
      [formInputs[1].name]: formInputs[1].value,
    }

    let url = 'https://minga-pjxq.onrender.com/api/auth/signin'
    let admin
    let author
    try {
      await axios.post(url, data)
        .then(res => {
          res.data.user.is_admin ? (admin = true) : (admin = false)
          res.data.user.is_author ? (author = true) : (author = false)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify({
            id: res.data.user._id,
            name: res.data.user.name,
            mail: res.data.user.mail,
            photo: res.data.user.photo,
            admin,
            author
          }))
          setInterval(() => window.location.href = '/', 1000)
        })
      toast.success("Login Successful")
      dataForm.current.reset()
    } catch (error) {
      if(error.response){
        if (typeof error.response.data.message === 'string') {
          toast.error(error.response.data.message)
        } else {
          error.response.data.message.forEach(err => toast.error(err))
        }
      }
    }
  }
   const clientID =
     "832824570689-e7qvn4d26pidll257mert5iurbdltfvc.apps.googleusercontent.com";

   useEffect(() => {
     const start = () => {
       gapi.auth2.init({
         clientId: clientID,
       });
     };
     gapi.load("client:auth2", start);
   }, []);

   const onSuccess = async (response) => {
    let url = "http://localhost:8080/api/auth/signin";
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token} }` }}

    try {
      const { email, imageUrl, googleId } = response.profileObj;

      const data = {
        mail: email,
        password: googleId,
      }
      if (email) await axios.post(url, data, headers)
      let res = await axios.post(url, data, headers)
      navigate("/");
      dataForm.current.reset();
      localStorage.setItem(`token`, res.data.token)
      localStorage.setItem(
        `user`,
        JSON.stringify({
          mail: email,
          photo: imageUrl,
          user_id: res.data.user._id
        })
      )
    } catch (error) {
      if (typeof error.response.data.message === "string") {
        toast.error(error.response.data.message);
      } else {
        error.response.data.message.forEach((err) => toast.error(err));
      }
    }
  }
   const onFailure = () => {
     console.log("Something went wrong");
   };
  return (
    <form className='form' onSubmit={handleSubmit} ref={dataForm}>
      <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
      <RegisterFieldset id='field-password' legendText='Password' inputType='password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />
      <SignBtn text='Sign In' />
      <GoogleLogin
                className="google"
                image="./google.png"
                text="Sign in with Google"
                clientId={clientID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"sigle_host_policy"}
              />
      <p>You don´t have an account yet? <Anchor onClick={renderRegister} className='link'>Sign Up</Anchor></p>
      <GoBackToHome />
      <Toaster position="top-right" />
    </form>
  )
}
