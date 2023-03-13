import React, { useEffect } from 'react'
import './mangac.css'
import ChapterTitle from '../../components/ChapterTitle/ChapterTitle'
import ChapterEmoji from '../../components/ChapterEmoji/ChapterEmoji'
import ChapterRead from '../../components/ChapterRead/ChapterRead'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import actions from '../../store/Chapters/actions'


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
        <div className='mangaChapter'>
            {manga.length !== 0 ? <ChapterTitle mangaInfo={manga} /> : null}
            <ChapterEmoji />
            {manga.length !== 0 ? <ChapterRead mangaInfo={manga} /> : null}
        </div >
    )
}