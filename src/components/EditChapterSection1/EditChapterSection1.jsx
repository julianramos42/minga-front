import React from 'react'
import EditChapterForm from '../EditChapterForm/EditChapterForm'
import './editchaptersection1.css'

export default function EditChapterSection1({ chapterInfo, setSelectedChapter, selectedChapter, title }) {
    return (
        <>
            <div className='sectionEdit1'>
                <h1 className='title-edit'>Edit Chapter</h1>
                <EditChapterForm chapterInfo={chapterInfo} selectedChapter={selectedChapter} title={title} setSelectedChapter={(chapter) => setSelectedChapter(chapter)} />
            </div>
        </>
    )
}
