import React from 'react'
import './navbar.css'
import Image from '../Image/Image'
import menuHam from '../../images/Menu.svg'

export default function NavBar({onClick}) {
    return (
        <a onClick={onClick}>
            <Image className='hamburguer-menu' src={menuHam} alt='menu-hamburguesa'/>
        </a>
    )
}
