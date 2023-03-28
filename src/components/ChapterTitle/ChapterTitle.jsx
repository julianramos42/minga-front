import React from 'react'
import './chaptertitle.css'
import H2 from '../../components/H2/H2'
import { Link as Anchor } from 'react-router-dom'

export default function ChapterTitle({ mangaInfo }) {

    return (
        <>
            <section className='section1'>
                <img src={mangaInfo.cover_photo} className='img-part-one' alt={mangaInfo.title} />
                <H2 text={mangaInfo.title} />
            </section>
            <div className='section2' >
                <button className='btn-section2'>{mangaInfo.category_id.name}</button>
                <Anchor className='companyName' to={'/author/'+mangaInfo.author_id._id}> {mangaInfo.author_id.name}</Anchor>
            </div>
        </>
    )
}