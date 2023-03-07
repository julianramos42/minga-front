import React from 'react'
import './footerNav.css'
import Image from '../Image/Image'
import logo from '../../images/Logo.png'
import facebook from '../../images/facebook-black.svg'
import twitter from '../../images/twitter-black.svg'
import vimeo from '../../images/vimeo-black.svg'
import youtube from '../../images/youtube-black.svg'
import { Link as Anchor } from 'react-router-dom'

export default function FooterNav() {
    return (
        <nav>
            <div className='pages'>
                <Anchor to='/index'>Home</Anchor>
                <Anchor>Mangas</Anchor>
            </div>
            <div className='logo-container'>
                <Image src={logo} alt='logo' />
            </div>
            <div className='social-container'>
                <div className='social'>
                    <Anchor to='#'><Image src={facebook} alt='facebook logo' /></Anchor>
                    <Anchor to='#'><Image src={twitter} alt='twitter logo' /></Anchor>
                    <Anchor to='#'><Image src={vimeo} alt='vimeo logo' /></Anchor>
                    <Anchor to='#'><Image src={youtube} alt='youtube logo' /></Anchor>
                </div>
                <Anchor to='#' className='donate'>Donate</Anchor>
            </div>
        </nav>
    )
}
