import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import './auth1.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'

export default function Auth1() {
  const [render, setRender] = useState(false)

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
