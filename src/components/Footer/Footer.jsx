import React from 'react'
import './footer.css'
import Image from '../Image/Image'
import footerImg from '../../images/footer.png' 
import FooterNav from '../FooterNav/FooterNav'
import FooterSubscribe from '../FooterSubscribe/FooterSubscribe'

export default function Footer() {
  return (
    <footer>
        <div className='img-container'>
            <Image src={footerImg} alt='manga-background' />
        </div>
        <FooterSubscribe />
        <FooterNav />
    </footer>
  )
}
