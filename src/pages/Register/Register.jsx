import React from 'react'
import './register.css'
import WelcomeSectionRegister from '../../components/WelcomeSectionRegister/WelcomeSectionRegister'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import registerImg from '../../images/registerImg.png'
import Image from '../../components/Image/Image'

export default function Register({renderLogin}) {
    

    return (
        <div className='register'>
            <div className='register-content'>
                <WelcomeSectionRegister />
                <RegisterForm renderLogin={renderLogin} />
            </div>
            <div className='register-img'>
                <Image src={registerImg} alt='tokyo-village'/>
            </div>
        </div>
    )
}
