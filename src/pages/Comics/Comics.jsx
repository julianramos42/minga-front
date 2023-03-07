import React from 'react'
import './comics.css'
import H2 from '../../components/H2/H2'
import Input from '../../components/Input/Input'
import Image from '../../components/Image/Image'
import loupe from '../../images/Search.svg'

export default function Comics() {
  return (
    <div className='mangas'>
       <section className='title'>
            <H2 text='Mangas' />
            <div>
                <Image src={loupe} alt='loupe' />
                <Input type='text' name='search-bar' placeholder='Find your manga here' />
            </div>
       </section>
    </div>
  )
}
