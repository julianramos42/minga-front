import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero';
import AuthForm from '../AuthForm/AuthForm'
import { useSelector } from 'react-redux';

export default function Index() {
  let reloadState = useSelector(store => store.logoutState.state)

  let [token,setToken] = useState()
  useEffect( () => {
    setToken(localStorage.getItem('token')) 
  },[reloadState,])

  return (
    <>
        <Hero />
        {token ? "" : <AuthForm />}
    </>
  )
}
