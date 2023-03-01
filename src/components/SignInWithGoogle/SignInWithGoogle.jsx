import React from 'react'
import Image from '../Image/Image'
import googleLogo from '../../images/Google.svg'
import './signInWithGoogle.css'

export default function SignInWithGoogle() {
  return (
    <a href='#' className='sign-in-google'><Image src={googleLogo} alt='' /><span>Sign in with Google</span></a>
  )
}
