import React from 'react'
import './editchaptersection2.css'
import ImagenNaruto from '../../images/editchapter-naruto.png'

export default function EditChapterSection2({ selectedChapter }) {
console.log(selectedChapter)
    return (
        <>
            <div className='sectionEdit2'>
                <h3 className='chapter-title'>
                    Capitulo # {selectedChapter ? selectedChapter.order : ""} - {selectedChapter ? selectedChapter.title : ""}
                </h3>
                <img className='image-chapter' src={selectedChapter ? selectedChapter.cover_photo : ""} alt={ImagenNaruto} />
            </div>
        </>
    )
}
