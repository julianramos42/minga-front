import React from 'react'
import './mangasCards.css'
import H2 from '../H2/H2'
import Image from '../../components/Image/Image'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function MangasCards() {
    const [mangas, setMangas] = useState(false)

    let mangasUrl = "http://localhost:8080/api/mangas"
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        axios.get(mangasUrl, headers).then(e => setMangas(e.data.mangas))
    }, [])

    return (
        <div className='mangas-cards'>
            {
                mangas ? mangas.map(manga => {
                    let card = <section className='card'>
                        <div className='card-text'>
                            <div className='card-color'></div>
                            <div className='text'>
                                <H2 text={manga.title} />
                                <span>{manga.category_id.name}</span>
                            </div>
                        </div>
                        <div className='card-img'>
                            <Image src={manga.cover_photo} alt='manga-image' />
                        </div>
                    </section>
                    return card
                }) : ""
            }
        </div>
    )
}
