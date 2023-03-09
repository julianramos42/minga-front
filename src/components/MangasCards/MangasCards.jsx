import React from 'react'
import './mangasCards.css'
import H2 from '../H2/H2'
import Image from '../../components/Image/Image'
import { useEffect } from 'react'
import eventsActions from '../../store/Events/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function MangasCards() {
    let text = useSelector(store => store.text.text) // TEXTO DEL BUSCADOR
    let mangas = useSelector(store => store.events.events)
    let categories = useSelector(store => store.categories.categories)
    let order = useSelector(store => store.order.order )
    let page = useParams().page

    const { read_events } = eventsActions
    const dispatch = useDispatch()

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        if (!mangas.lenght) {
            dispatch(read_events({ page: page, inputText: text, categories: categories, order: order, headers }))
        }
    }, [page, text, categories, order])

    return (
        <div className='mangas-cards'>
            {
                mangas.length ? mangas.map((manga, i) => {
                    let card = <section className='card' key={i}>
                        <div className='card-text'>
                            <div className='card-color'></div>
                            <div className='text'>
                                <H2 text={manga.title} />
                                <span>{manga.category_id.name}</span>
                            </div>
                        </div>
                        <div className='card-img'>
                            <Image src={manga.cover_photo} alt='manga-image' />
                        </div>
                    </section>
                    return card
                }) : <H2 text='No mangas founded' />
            }
        </div>
    )
}
