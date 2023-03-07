import React from 'react'
import './registerForm.css'
import SignInWithGoogle from '../SignInWithGoogle/SignInWithGoogle'
import RegisterFieldset from '../RegisterFieldset/RegisterFieldset'
import profile from '../../images/profile.svg'
import email from '../../images/@.svg'
import lock from '../../images/lock.svg'
import camera from '../../images/camera.svg'
import Input from '../Input/Input'
import { useRef } from 'react'
import axios from 'axios'
import SignBtn from '../SignBtn/SignBtn'
import GoBackToHome from '../GoBackToHome/GoBackToHome'
import { Link as Anchor } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function RegisterForm({ renderLogin }) {
    let dataForm = useRef()

    async function handleSubmit(e) {
        e.preventDefault()

        let formInputs = []

        Object.values(dataForm.current).forEach(e => {
            if (e.name) {
                formInputs.push(e)
            }
        })
        formInputs.pop()
        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
            [formInputs[2].name]: formInputs[2].value,
            [formInputs[3].name]: formInputs[3].value,
        }

        let url = 'http://localhost:8080/auth/signup'
        try {
            await axios.post(url, data)
            toast.success("Register Successful")
            dataForm.current.reset()
        } catch (error) {
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else {
                error.response.data.message.forEach(err => toast.error(err))
            }
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit} ref={dataForm}>
            <RegisterFieldset legendText='Name' inputType='text' inputName='name' inputId='name' imgSrc={profile} imgAlt='person' />
            <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
            <RegisterFieldset legendText='Photo' inputType='text' inputName='photo' inputId='photo' imgSrc={camera} imgAlt='camera' />
            <RegisterFieldset id='field-password' legendText='Password' inputType='password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />

            <fieldset className='notification-check'>
                <Input type='checkbox' name='email-notification' id='email-notification' />
                <label htmlFor='email-notification'>Send notification to my email</label>
            </fieldset>
            <SignBtn text="Sign up" />
            <SignInWithGoogle />
            <p>Already have an account? <Anchor onClick={renderLogin} className='link'>Log in</Anchor></p>
            <GoBackToHome />
            <Toaster position='top-right' />
        </form>
    )
}
