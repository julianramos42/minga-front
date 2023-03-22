import React from 'react'
// ITS USING THE CSS OF ./MangasBtns
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function FavouritesMangasBtns() {
    let page = Number(useParams().page)
    let mangas = useSelector(store => store.favouritesMangas.favouritesMangas)

    return (
        <div className='page-btns'>
            {page == 1 ? "" : <Anchor className='prev' to={'/myreactions/' + (page - 1)} >Prev</Anchor>}
            { mangas.length == 6 || mangas.length == 10 ? <Anchor className='next' to={'/myreactions/' + (page + 1)} >Next</Anchor> : "" }
        </div>
    )
}
