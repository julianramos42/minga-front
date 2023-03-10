import React from 'react'
import './mangac.css'
import ChapterTitle from '../../components/ChapterTitle/ChapterTitle'
import ChapterEmoji from '../../components/ChapterEmoji/ChapterEmoji'
import ChapterRead from '../../components/ChapterRead/ChapterRead'


export default function MangaC(props) {
    

    return (
        <div className='mangaChapter'>
            
            <ChapterTitle />
            <ChapterEmoji/>
            <ChapterRead />


        </div >
    )
}

