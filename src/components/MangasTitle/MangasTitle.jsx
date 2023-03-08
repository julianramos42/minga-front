import React from 'react'
import './mangasTitle.css'
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import loupe from '../../images/Search.svg'
import Input from '../../components/Input/Input'

export default function MangasTitle() {
    return (
        <section className='title'>
            <H2 text='Mangas' />
            <div className='search-bar'>
                <Image src={loupe} alt='loupe' />
                <Input type='text' name='search-bar' placeholder='Find your manga here' />
            </div>
        </section>
    )
}
