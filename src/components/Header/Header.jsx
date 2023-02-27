import React from 'react'
import NavBar from '../NavBar/NavBar'
import './header.css'
import Image from '../Image/Image'
import logo from '../../images/Logo.png'
import { useState } from 'react'
import OpenHamNav from '../OpenHamNav/OpenHamNav'

export default function Header() {
  const [render, setRender] = useState(false)

  function handleRender(){
    setRender(!render)
  }
  
  return (
    <header>
        <NavBar onClick={handleRender}/>
        { render ? <OpenHamNav handleRender={handleRender} /> : "" }
        <Image className='logo' src={logo} alt='logo'/>
    </header>
  )
}
