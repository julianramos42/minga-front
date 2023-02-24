import React from 'react'
import './register.css'
import WelcomeSection from '../WelcomeSection/WelcomeSection'
import RegisterForm from '../RegisterForm/RegisterForm'
import registerImg from '../../images/registerImg.png'
import Image from '../Image/Image'

export default function Register() {
    

    return (
        <div className='register'>
            <div>
                <WelcomeSection />
                <RegisterForm />
            </div>
            <div className='register-img'>
                <Image src={registerImg} alt='tokyo-village'/>
            </div>
        </div>
    )
}
