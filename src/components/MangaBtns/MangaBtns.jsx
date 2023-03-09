import React from 'react'
import './mangaBtns.css'
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MangaBtns() {
    let page = Number(useParams().page)
    let mangas = useSelector(store => store.events.events)

    return (
        <div className='page-btns'>
            {page == 1 ? "" : <Anchor className='prev' to={'/mangas/' + (page - 1)} >Prev</Anchor>}
            {mangas.length ? <Anchor className='next' to={'/mangas/' + (page + 1)} >Next</Anchor> : ""}
        </div>
    )
}
