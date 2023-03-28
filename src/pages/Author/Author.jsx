import React from 'react'
import './author.css'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import AuthorSwitch from '../../components/AuthorSwitch/AuthorSwitch'
import AuthorMangas from '../../components/AuthorMangas/AuthorMangas'
import { Link as Anchor } from 'react-router-dom'

export default function Author() {
    let token = localStorage.getItem('token')

    return (
        <>
            {
                token ? <div className='author-container'>
                    <AuthorInfo />
                    <AuthorSwitch />
                    <AuthorMangas />
                </div> : <div className='noLogged'><Anchor to='/auth'>Please Register or Login</Anchor></div>
            }
        </>
    )
}
