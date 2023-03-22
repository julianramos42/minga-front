import React, { useEffect, useState } from 'react'
import './chapterread.css'
import IconComent from '../../images/iconcomment.png'
import { Link as Anchor } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import chapterActions from '../../store/Chapters/actions'
import actions from '../../store/Captures/actions'
import H2 from '../H2/H2'
import { useParams } from 'react-router-dom'

const { read_chapters } = chapterActions
const { captureState } = actions;

export default function ChapterRead({ mangaInfo }) {
    const page = Number(useParams().page)
    const dispatch = useDispatch()
    const [pagination, setPagination] = useState(page)
    const [capitulo, setCapitulo] = useState(true)
    const headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    let chapters = useSelector(store => store.chapters.chapters)
    let check = useSelector(store => store.checked.checked)


    function check1() {
        setCapitulo(true)
        dispatch(captureState({ buttonState: false }))
    }
    function checkState() {
        setCapitulo(false)
        dispatch(captureState({ buttonState: true }))
    }

    useEffect(() => {
        dispatch(read_chapters({ manga_id: mangaInfo._id, page: pagination, headers: headers }))
    }, [pagination, capitulo])

    useEffect(() => {
        setCapitulo(!check)

    }, [])
   
    return (
        <>
            <div className='details-btns'>
                <button className={capitulo === true ? 'manga-btn prueba' : 'manga-btn'} onClick={check1}>Manga</button>
                <button className={capitulo === false ? 'manga-btn prueba' : 'manga-btn'} onClick={checkState}>Chapters</button>
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
                            chapters?.length > 0
                                ?
                                chapters.map((chapter,i) => {
                                    return (
                                        <div className='sectionChapter'key={i}>
                                            <img className='selecChapter' src={chapter.cover_photo} alt={chapter.title} />
                                            <div className='order-chapter'>
                                                <p className='p-chapter'>Chapter #{chapter.order} </p>
                                                <div className='coment-chapter'>
                                                    <img src={IconComent} alt="icono-coment" />
                                                    <p>169</p>
                                                </div>
                                            </div>
                                            <Anchor to={'/chapters/' + chapter._id+'/0'}><button className='btn-read'>Read</button></Anchor>
                                        </div>
                                    )
                                })
                                :
                                <H2 text='No Chapter founded' />
                        }
                        <div className='div-chapter'>
                            {pagination !== 1 && <Anchor to={'/mangas/' + mangaInfo._id + '/' + (pagination - 1)}><button className='btn-chapter' onClick={() => setPagination(pagination - 1)}>prev</button></Anchor>}
                            {chapters?.length === 4 && <Anchor to={'/mangas/' + mangaInfo._id + '/' + (pagination + 1)}><button className='btn-chapter' onClick={() => setPagination(pagination + 1)}>next</button></Anchor>}
                        </div>

                    </section>
            }

        </>
    )
}
