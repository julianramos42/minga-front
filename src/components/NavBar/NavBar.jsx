import React from 'react'
import './navbar.css'
import Image from '../Image/Image'
import menuHam from '../../images/Menu.svg'

export default function NavBar() {
    return (
        <Image className='hamburguer-menu' src={menuHam} alt='menu-hamburguesa'/>
    )
}
