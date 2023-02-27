import React from 'react'
import './footerSubscribe.css'
import H2 from '../H2/H2'
import Input from '../Input/Input'

export default function FooterSubscribe() {
    return (
        <section className='subscribe-section'>
            <H2 text={'Subscribe'} />
            <form className='subscribe-container'>
                <Input type='email' name='subscribe' id='subscribe' placeholder='Enter your email' />
                <Input className='subscribe-submit' type='submit' value='Subscribe Now' />
            </form>
        </section>
    )
}
