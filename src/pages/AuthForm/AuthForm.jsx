import React from 'react'
import './authForm.css'
import { useState } from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'
import { useEffect } from 'react'

export default function Auth1({state}) {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(state)
  },[state])

  function renderRegister(){
    handleRender('register')
  }

  function renderLogin(){
    handleRender('login')
  }

  function handleRender(btn){
    setRender(btn)
  }

  return (
    <div className='auth'>
      { !render ? <Register renderLogin={renderLogin} /> : "" }
      { render === 'register' ? <Register renderLogin={renderLogin}/> : "" }
      { render === 'login' ? <Login renderRegister={renderRegister} /> : "" }
    </div>
  )
}
