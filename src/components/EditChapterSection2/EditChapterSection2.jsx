import React from 'react'
import './editchaptersection2.css'
import { useSelector } from 'react-redux'

export default function EditChapterSection2() {
    let { order, chapter } = useSelector(store => store.editchapter)
    return (
        order &&
        <>
            <div className='sectionEdit2'>
                <h3 className='chapter-title'>
                    Capitulo # {order} - {chapter?.title}
                </h3>
                <img className='image-chapter' src={chapter?.cover_photo} alt={chapter?.title} />
            </div>
        </>
    )
}
