import React from 'react'
import './author.css'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import AuthorSwitch from '../../components/AuthorSwitch/AuthorSwitch'
import AuthorMangas from '../../components/AuthorMangas/AuthorMangas'

export default function Author() {
    return (
        <div className='author-container'>
            <AuthorInfo />
            <AuthorSwitch />
            <AuthorMangas />
        </div>
    )
}
