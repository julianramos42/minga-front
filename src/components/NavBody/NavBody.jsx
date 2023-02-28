import React from 'react'
import './navBody.css'
import { Link as Anchor, useParams } from 'react-router-dom'

export default function NavBody() {
    const { favourites } = useParams()

    return (
        <div className='navBody'>
            <Anchor to='/index' className='active'>Home</Anchor>
            <Anchor to='/'>Mangas</Anchor>
            <Anchor to='/'>My mangas</Anchor>
            <Anchor to='/'>Favourites</Anchor>
            <Anchor to='/'>Logout</Anchor>
        </div>
    )
}
