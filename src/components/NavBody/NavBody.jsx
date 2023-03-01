import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'

export default function NavBody() {
    return (
        <div className='navBody'>
            <Anchor to='/index'>Home</Anchor>
            <Anchor to='/'>Mangas</Anchor>
            <Anchor to='/'>My mangas</Anchor>
            <Anchor to='/'>Favourites</Anchor>
            <Anchor to='/auth'>Auth</Anchor>
            <Anchor to='/author-form'>New Author</Anchor>
        </div>
    )
}
