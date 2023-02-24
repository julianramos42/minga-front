import React from 'react'
import NavBar from '../NavBar/NavBar'
import './header.css'

export default function Header() {
  return (
    <header>
        <NavBar />
        <img className='logo' src='./images/Logo.png' />
    </header>
  )
}
