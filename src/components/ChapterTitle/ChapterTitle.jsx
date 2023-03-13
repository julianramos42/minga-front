import React from 'react'
import './chaptertitle.css'
import H2 from '../../components/H2/H2'

export default function ChapterTitle({ mangaInfo }) {

    return (
        <>
            <section className='section1'>
                <img src={mangaInfo.cover_photo} className='img-part-one' alt={mangaInfo.title} />
                <H2 text={mangaInfo.title} />
            </section>
            <section className='section2' >
                <button className='btn-section2'>{mangaInfo.category_id.name}</button>
                <h2 className='companyName'>   Company Name</h2>
            </section>
        </>
    )
}