import React from 'react'
import './chapterread.css'
import ImgNaruto from '../../images/img-naruto.png'
import IconComent from '../../images/iconcomment.png'
import { useRef } from 'react'
import { Link as Anchor } from 'react-router-dom'


export default function ChapterRead() {
    let btnManga = useRef()
    let btnChapters = useRef()
    function prueba() {
        btnChapters.current.classList.toggle('prueba')
        btnManga.current.classList.toggle('prueba')

    }
    return (
        <>
            <div className='details-btns'>
                <Anchor className='manga-btn prueba' ref={btnManga} onClick={prueba}>Manga</Anchor>
                <Anchor className='manga-btn' ref={btnChapters} onClick={prueba}>Chapters</Anchor>
            </div>
            <div className='description-manga'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minus?</p>
            </div>

            <section className='card-chapter'>
                <div className='sectionChapter'>
                    <img className='selecChapter' src={ImgNaruto} alt="img-chapter" />
                    <div className='order-chapter'>
                        <p className='p-chapter'>Chapter #1 </p>
                        <div className='coment-chapter'>
                            <img src={IconComent} alt="icono-coment" />
                            <p>169</p>
                        </div>
                    </div>
                    <button className='btn-read'>Read</button>
                </div>

            </section>
        </>
    )
}
