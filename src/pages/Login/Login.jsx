import React from 'react'
import './login.css'
import loginImg from '../../images/loginImg.png'
import Image from '../../components/Image/Image'
import WelcomeSectionLogin from '../../components/WelcomeSectionLogin/WelcomeSectionLogin'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function Login({renderRegister, handleRender}) {
  return (
    <div className='login'>
        <div className='login-img'>
            <Image src={loginImg} alt='tokyo-village'/>
        </div>
        <div className='login-content'>
            <WelcomeSectionLogin />
            <LoginForm renderRegister={renderRegister}/>
        </div>
    </div>
  )
}
