import React from 'react'
import './register.css'
import WelcomeSection from '../WelcomeSection/WelcomeSection'
import Image from '../Image/Image'
import profile from '../../images/profile.svg'
import email from '../../images/@.svg'
import lock from '../../images/lock.svg'
import googleLogo from '../../images/Google.svg'

export default function Register() {
    return (
        <div className='register'>
            <div>
                <WelcomeSection />
                <form className='form'>
                    <fieldset>
                        <legend>Name</legend>
                        <input type='text' name='name' id='name' />
                        <Image src={profile} alt='person' />
                    </fieldset>
                    <fieldset>
                        <legend>Email</legend>
                        <input type='email' name='email' id='email' />
                        <Image src={email} alt='@' />
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <input type='password' name='password' id='password' />
                        <Image src={lock} alt='lock' />
                    </fieldset>
                    <fieldset>
                        <legend>Confirm Password</legend>
                        <input type='password' name='confirm-password' id='confirm-password' />
                        <Image src={lock} alt='lock' />
                    </fieldset>
                    <fieldset className='notification-check'>
                        <input type="checkbox" name='email-notification' id='email-notification' />
                        <label htmlFor='email-notification'>Send notification to my email</label>
                    </fieldset>
                    <a href='#' className='sign-up'>Sign up</a>
                    <a href='#' className='sign-in-google'><Image src={googleLogo} alt='' /><span>Sign in with Google</span></a>
                    <p>Already have an account? <a href='#' className='link'>Log in</a></p>
                    <p>Go back to <a href='#' className='link'>home page</a></p>
                </form>
            </div>
        </div>
    )
}
