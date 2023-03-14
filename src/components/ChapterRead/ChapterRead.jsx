import React, { useEffect, useState } from 'react'
import './chapterread.css'
import IconComent from '../../images/iconcomment.png'
import { Link as Anchor } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import chapterActions from '../../store/Chapters/actions'
import H2 from '../H2/H2'

const { read_chapters } = chapterActions

export default function ChapterRead({ mangaInfo }) {

    const dispatch = useDispatch()
    const [pagination, setPagination] = useState(1)
    const [capitulo, setCapitulo] = useState(true)
    const headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    let chapters = useSelector(store => store.chapters.chapters)
    
    
    useEffect(() => {
        dispatch(read_chapters({ manga_id: mangaInfo._id, page: pagination, headers: headers }))
    }, [pagination])
    
    

    return (
        <>
            <div className='details-btns'>
                <button className={capitulo === true ? 'manga-btn prueba' : 'manga-btn'} onClick={() => { setCapitulo(true) }}>Manga</button>
                <button className={capitulo === false ? 'manga-btn prueba' : 'manga-btn'} onClick={() => { setCapitulo(false) }}>Chapters</button>
            </div>

            {
                capitulo === true
                    ?
                    <div className='description-manga'>
                        <p>{mangaInfo.description}</p>
                    </div>
                    :
                    <section className='card-chapter'>
                        {
                            chapters.length > 0
                                ?
                                chapters.map(chapter => {
                                    return (
                                        <div className='sectionChapter'>
                                            <img className='selecChapter' src={chapter.manga_id.cover_photo} alt={chapter.title} />
                                            <div className='order-chapter'>
                                                <p className='p-chapter'>Chapter #{chapter.order} </p>
                                                <div className='coment-chapter'>
                                                    <img src={IconComent} alt="icono-coment" />
                                                    <p>169</p>
                                                </div>
                                            </div>
                                            <Anchor to={'/chapters/' + mangaInfo._id }><button className='btn-read'>Read</button></Anchor>
                                        </div>
                                    )
                                })
                                :
                                <H2 text='No Chapter founded' />
                        }
                        <div className='div-chapter'>
                            {pagination !== 1 && <Anchor to={'/mangas/' + mangaInfo._id + '/' + (pagination - 1)}><button className='btn-chapter' onClick={() => setPagination(pagination - 1)}>prev</button></Anchor>}
                            {chapters.length === 4 && <Anchor to={'/mangas/' + mangaInfo._id + '/' + (pagination + 1)}><button className='btn-chapter' onClick={() => setPagination(pagination + 1)}>next</button></Anchor>}
                        </div>

                    </section>
            }

        </>
    )
}
