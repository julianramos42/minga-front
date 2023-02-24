import React from 'react'
import './register.css'
import WelcomeSection from '../WelcomeSection/WelcomeSection'

export default function Register() {
  return (
    <div className='register'>
        <WelcomeSection />
        <form>
            <fieldset>
                <legend>Name</legend>
                <input type='text' name='name' id='name' />
            </fieldset>
        </form>
    </div>
  )
}
