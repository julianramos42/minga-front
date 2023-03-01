import React from 'react'
import email from '../../images/@.svg'
import lock from '../../images/lock.svg'
import RegisterFieldset from '../RegisterFieldset/RegisterFieldset'
import SignBtn from '../SignBtn/SignBtn'
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle'
import GoBackToHome from '../GoBackToHome/GoBackToHome'
import { Link as Anchor } from 'react-router-dom'

export default function LoginForm({renderRegister}) {
    return (
      <form className='form'>
            <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
            <RegisterFieldset id='field-password' legendText='Password' inputType='password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />
            <SignBtn text='Sign In' />
            <SignInWithGoogle />
            <p>You don´t have an account yet? <Anchor onClick={renderRegister} className='link'>Sign Up</Anchor></p>
            <GoBackToHome />
      </form>
    )
}
