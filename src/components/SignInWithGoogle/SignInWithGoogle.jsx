import React from 'react'
import Image from '../Image/Image'
import googleLogo from '../../images/Google.svg'
import './signInWithGoogle.css'
import { Link as Anchor } from 'react-router-dom'

export default function SignInWithGoogle() {
  return (
    <Anchor to='#' className='sign-in-google'><Image src={googleLogo} alt='' /><span>Sign in with Google</span></Anchor>
  )
}
