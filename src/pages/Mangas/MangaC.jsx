import React, { useEffect } from 'react'
import './mangac.css'
import ChapterTitle from '../../components/ChapterTitle/ChapterTitle'
import Reaction from '../../components/Reaction/Reaction'
import ChapterRead from '../../components/ChapterRead/ChapterRead'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import actions from '../../store/Chapters/actions'
import { Link as Anchor } from 'react-router-dom'

const { read_manga, delete_chapter } = actions

export default function MangaC() {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let manga = useSelector(store => store.chapters.manga)
    let _id = useParams();
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(read_manga({ manga_id: _id.id, headers: headers }))
        dispatch(delete_chapter())
    }, [])
    
    return (
        <>
            {
                token ? <div className='mangaChapter'>
            {manga.length !== 0 ? <ChapterTitle mangaInfo={manga} /> : null}
            {manga.length !== 0 ? <Reaction /> : null}
            {manga.length !== 0 ? <ChapterRead mangaInfo={manga} /> : null}
        </div > : <div className='noLogged'><Anchor to='/auth'>Please Register or Login</Anchor></div>
            }
        </>
    )
}