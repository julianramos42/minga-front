import React from 'react'
import './footerNav.css'
import Image from '../Image/Image'
import logo from '../../images/Logo.png'
import facebook from '../../images/facebook-black.svg'
import twitter from '../../images/twitter-black.svg'
import vimeo from '../../images/vimeo-black.svg'
import youtube from '../../images/youtube-black.svg'

export default function FooterNav() {
    return (
        <nav>
            <div className='pages'>
                <a>Home</a>
                <a>Mangas</a>
            </div>
            <div className='logo-container'>
                <Image src={logo} alt='logo' />
            </div>
            <div className='social-container'>
                <div className='social'>
                    <a href='#'><Image src={facebook} alt='facebook logo' /></a>
                    <a href='#'><Image src={twitter} alt='twitter logo' /></a>
                    <a href='#'><Image src={vimeo} alt='vimeo logo' /></a>
                    <a href='#'><Image src={youtube} alt='youtube logo' /></a>
                </div>
                <a href='#' className='donate'>Donate</a>
            </div>
        </nav>
    )
}
