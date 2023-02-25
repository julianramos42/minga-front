import React from 'react'
import './navBody.css'

export default function NavBody() {
    return (
        <div className='navBody'>
            <a href='#' className='active'>Home</a>
            <a href='#'>Mangas</a>
            <a href='#'>My mangas</a>
            <a href='#'>Favourites</a>
            <a href='#'>Logout</a>
        </div>
    )
}
