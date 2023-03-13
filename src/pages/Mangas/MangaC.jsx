import React, { useEffect } from 'react'
import './mangac.css'
import ChapterTitle from '../../components/ChapterTitle/ChapterTitle'
import ChapterEmoji from '../../components/ChapterEmoji/ChapterEmoji'
import ChapterRead from '../../components/ChapterRead/ChapterRead'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function MangaC() {

    let mangas = useSelector(store => store.events.events)
    let _id = useParams();
    let manga = mangas.filter(manga => manga._id === _id.id)

    return (
        <div className='mangaChapter'>
            <ChapterTitle mangaInfo={manga[0]} />
            <ChapterEmoji />
            <ChapterRead mangaInfo={manga[0]} />
        </div >
    )
}