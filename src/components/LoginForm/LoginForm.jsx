import React from 'react'
import email from '../../images/@.svg'
import lock from '../../images/lock.svg'
import RegisterFieldset from '../RegisterFieldset/RegisterFieldset'
import SignBtn from '../SignBtn/SignBtn'
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle'
import GoBackToHome from '../GoBackToHome/GoBackToHome'
import { Link as Anchor } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function LoginForm({renderRegister}) {
  let dataForm = useRef()

    async function handleSubmit(e){
        e.preventDefault()

        let formInputs = []

        Object.values(dataForm.current).forEach(e => {
            if(e.name){
                formInputs.push(e)
            }
        })

        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
        }

        let url = 'http://localhost:8080/auth/signin'
        try{
            await axios.post(url,data)
            .then(res => {
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('photo', res.data.user.photo)
              localStorage.setItem('name', res.data.user.name)
              localStorage.setItem('mail', res.data.user.mail)
              setInterval(() => window.location.href='/index', 1000)
            })
            toast.success("Inicio Exitoso")
            dataForm.current.reset()
          }catch(error){
            toast.error('Credenciales Incorrectas')
        }      
    }

    return (
      <form className='form' onSubmit={handleSubmit} ref={dataForm}>
            <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
            <RegisterFieldset id='field-password' legendText='Password' inputType='password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />
            <SignBtn text='Sign In' />
            <SignInWithGoogle />
            <p>You don´t have an account yet? <Anchor onClick={renderRegister} className='link'>Sign Up</Anchor></p>
            <GoBackToHome />
            <Toaster position="top-right" />
      </form>
    )
}
