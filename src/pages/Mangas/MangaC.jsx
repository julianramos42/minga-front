import React from 'react'
import './mangac.css'
import ImgNaruto from '../../images/img-naruto.png'

export default function MangaC() {
    return (
        <div className='mangaChapter'>
            <section className='inicio'>
                <img src={ImgNaruto} className='img-part-one' alt="img-naruto" />
            </section>
        </div>
    )
}
