import React from 'react'
import './mangac.css'
import H2 from '../../components/H2/H2'
import ImgNaruto from '../../images/img-naruto.png'
import IconoManga from '../../images/icono-manga.png'
import IconoMang from '../../images/iconomanga-.png'
import IconoEmoji from '../../images/mangacoment.png'
import IconoCorazon from '../../images/iconocorazon.png'
import IconComent from '../../images/iconcomment.png'
import { Link as Anchor } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'


export default function MangaC() {
    let btnManga = useRef()
    let btnChapters = useRef()
    function prueba() {
        btnChapters.current.classList.toggle('prueba')
        btnManga.current.classList.toggle('prueba')

    }

    return (
        <div className='mangaChapter'>
            <section className='section1'>
                <img src={ImgNaruto} className='img-part-one' alt="img-naruto" />
                <H2 text='Naruto: And Thats Why Youre Disqualified!! #8' />
            </section>
            <section className='section2' >
                <button className='btn-section2'>category</button>
                <h2 className='companyName'>   Company Name</h2>
            </section>
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
            <div className='details-btns'>
                <Anchor className='manga-btn prueba' ref={btnManga} onClick={prueba}>Manga</Anchor>
                <Anchor className='manga-btn' ref={btnChapters} onClick={prueba}>Chapters</Anchor>
            </div>
            <div className='description-manga'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus?</p>
            </div>

            <section className=''>
                <div className='sectionChapter'>
                    <img className='selecChapter' src={ImgNaruto} alt="img-chapter" />
                    <div className='order-chapter'>
                        <p>Chapter #1 </p>
                        <div className='coment-chapter'>
                            <img src={IconComent} alt="icono-coment" />
                            <p>169</p>
                        </div>
                    </div>
                    <button className='btn-read'>Read</button>
                </div>

            </section>
        </div>
    )
}
