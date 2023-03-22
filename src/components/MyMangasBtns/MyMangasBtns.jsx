import React from 'react'
// ITS USING THE CSS OF ./MangasBtns
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MyMangasBtns() {
    let page = Number(useParams().page)
    let mangas = useSelector(store => store.myMangas.myMangas)

    return (
        <div className='page-btns'>
            {page == 1 ? "" : <Anchor className='prev' to={'/mymangas/' + (page - 1)} >Prev</Anchor>}
            { mangas.length == 6 || mangas.length == 10 ? <Anchor className='next' to={'/mymangas/' + (page + 1)} >Next</Anchor> : "" }
        </div>
    )
}
