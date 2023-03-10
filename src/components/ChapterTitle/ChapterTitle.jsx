import React from 'react'
import './chaptertitle.css'
import ImgNaruto from '../../images/img-naruto.png'
import H2 from '../../components/H2/H2'

export default function ChapterTitle() {
    return (

        <>
            <section className='section1'>
                <img src={ImgNaruto} className='img-part-one' alt="img-naruto" />
                <H2 text='Naruto: And Thats Why Youre Disqualified!! #8' />
            </section>
            <section className='section2' >
                <button className='btn-section2'>category</button>
                <h2 className='companyName'>   Company Name</h2>
            </section>
        </>

    )
}
