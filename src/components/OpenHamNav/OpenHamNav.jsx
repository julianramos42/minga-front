import React from 'react'
import './openHamNav.css'
import NavBody from '../NavBody/NavBody'
import NavHeader from '../NavHeader/NavHeader'

export default function OpenHamNav({handleRender}) {
  return (
    <nav className='open-nav' id='nav'>
        <NavHeader handleRender={handleRender}/>
        <NavBody />
    </nav>
  )
}
