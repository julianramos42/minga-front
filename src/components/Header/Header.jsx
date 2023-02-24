import React from 'react'
import NavBar from '../NavBar/NavBar'
import './header.css'
import Image from '../Image/Image'
import logo from '../../images/Logo.png'

export default function Header() {
  return (
    <header>
        <NavBar />
        <Image className='logo' src={logo} alt='logo'/>
    </header>
  )
}
