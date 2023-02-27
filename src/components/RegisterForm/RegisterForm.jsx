import React from 'react'
import './registerForm.css'
import Image from '../Image/Image'
import googleLogo from '../../images/Google.svg'
import RegisterFieldset from '../RegisterFieldset/RegisterFieldset'
import profile from '../../images/profile.svg'
import email from '../../images/@.svg'
import lock from '../../images/lock.svg'
import Input from '../Input/Input'
import { useRef } from 'react'
import axios from 'axios'

export default function RegisterForm() {
    let dataForm = useRef()

    async function handleSubmit(e){
        e.preventDefault()

        let formInputs = []

        Object.values(dataForm.current).forEach(e => {
            if(e.name){
                formInputs.push(e)
            }
        })
        formInputs.pop()
        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
            [formInputs[2].name]: formInputs[2].value,
        }

        let url = 'http://localhost:8080/users'
        if(formInputs[2].value === formInputs[3].value){
            try{
                await axios.post(url,data)
                alert("Registro exitoso")
                dataForm.current.reset()
              }catch(error){
                console.log(error)
                console.log("ocurrio un error")
            }
            
        }else{
            alert("Las contraseñas no coinciden")
        }
        
    }

    return (
        <form className='form' onSubmit={handleSubmit} ref={dataForm}>
            <RegisterFieldset legendText='Name' inputType='text' inputName='name' inputId='name' imgSrc={profile} imgAlt='person' />
            <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
            <RegisterFieldset id='field-password' legendText='Password' inputType='password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />
            <RegisterFieldset legendText='Confirm Password' inputType='password' inputName='confirm-password' inputId='confirm-password' imgSrc={lock} imgAlt='lock' />
            
            <fieldset className='notification-check'>
                <input type="checkbox" name='email-notification' id='email-notification' />
                <label htmlFor='email-notification'>Send notification to my email</label>
            </fieldset>
            <Input className='sign-up' type='submit' value="Sign up" />
            <a href='#' className='sign-in-google'><Image src={googleLogo} alt='' /><span>Sign in with Google</span></a>
            <p>Already have an account? <a href='#' className='link'>Log in</a></p>
            <p>Go back to <a href='#' className='link'>home page</a></p>
        </form>
    )
}
