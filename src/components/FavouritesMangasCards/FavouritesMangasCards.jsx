import React from 'react'
import './favouritesMangasCards.css'
import H2 from '../H2/H2'
import Image from '../../components/Image/Image'
import { useEffect } from 'react'
import mangasActions from '../../store/FavouritesMangas/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import toast,{ Toaster } from 'react-hot-toast'

export default function FavouritesMangasCards() {
    let mangas = useSelector(store => store.favouritesMangas.favouritesMangas)
    let categories = useSelector(store => store.categories.categories)
    let order = useSelector(store => store.order.order)
    let page = useParams().page

    const { read_favouritesMangas } = mangasActions
    const dispatch = useDispatch()

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    let [reload,setReload] = useState(false)

    useEffect(() => {
        setTimeout( () => {
            dispatch(read_favouritesMangas({ page: page, categories: categories, order: order, headers }))
        },100)
    }, [page, categories, order, reload])

    function handleDelete(e){
        let url = 'https://minga-pjxq.onrender.com/api/reactions'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let data = {
            "manga_id": e.target.id,
            "name": "love"
        }
        axios.post(url,data,headers)
        setReload(!reload)
        toast.success("Manga removed from favourites")
    }

    return (
        <div className='mangas-cards'>
            {
                mangas.length ? mangas.map((manga, i) => {
                    let card =
                        <section className='card' key={i}>
                            <div className='card-text'>
                                <div className={'card-color-'+manga.category_id.name}></div>
                                <div className='text'>
                                    <div>
                                        <H2 text={manga.title} />
                                        <span className={'span-'+manga.category_id.name}>{manga.category_id.name}</span>
                                    </div>
                                    <div className='actions-btns'>
                                        <Anchor className='myMangas-card-anchor' to={'/mangas/' + manga._id + "/1"}>Read</Anchor>
                                        <Anchor id={manga._id} className='myMangas-card-anchor deleteBtn' onClick={handleDelete}>Remove</Anchor>
                                    </div>
                                </div>
                            </div>
                            <div className='card-img'>
                                <Image src={manga.cover_photo} alt='manga-image' />
                            </div>
                        </section>
                    return card
                }) : <H2 text='No mangas founded' />
            }
            <Toaster />
        </div>
    )
}
