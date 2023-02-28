import React from 'react'
import './register.css'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import registerImg from '../../images/registerImg.png'
import Image from '../../components/Image/Image'

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
