import React from 'react'
import './chapteremoji.css'
import IconoManga from '../../images/icono-manga.png'
import IconoMang from '../../images/iconomanga-.png'
import IconoEmoji from '../../images/mangacoment.png'
import IconoCorazon from '../../images/iconocorazon.png'

export default function ChapterEmoji() {
  return (
    <>
    <section className='section3'>
        <img className='emojis' src={IconoManga} alt="emoji1" />
        <img className='emojis' src={IconoMang} alt="emoji2" />
        <img className='emojis' src={IconoEmoji} alt="emoji3" />
        <img className='emojis' src={IconoCorazon} alt="emoji4" />
    </section>
    <section className='section4'>
        <div className='rectangle-manga'>
            <div className='rectangle-text'>
                <p className='text1'>4.5/5</p>
                <p className='text2'>Rating</p>
            </div>
            <p className='text3'> | </p>
            <div className='rectangle-text'>
                <p className='text1'>265</p>
                <p className='text2'>Chapters</p>
            </div>
            <p className='text3'> | </p>
            <div className='rectangle-text'>
                <p className='text1'>Eng</p>
                <p className='text2'>Lenguaje</p>
            </div>
        </div>
    </section>
</>
  )
}
