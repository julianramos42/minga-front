import React from 'react'
import './mangasCards.css'
import H2 from '../H2/H2'
import Image from '../../components/Image/Image'
import { useEffect } from 'react'
import mangasActions from '../../store/Mangas/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'

export default function MangasCards() {
    let text = useSelector(store => store.text.text) // TEXTO DEL BUSCADOR
    let mangas = useSelector(store => store.mangas.mangas)
    let categories = useSelector(store => store.categories.categories)
    let order = useSelector(store => store.order.order)
    let page = useParams().page

    const { read_mangas } = mangasActions
    const dispatch = useDispatch()

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        dispatch(read_mangas({ page: page, inputText: text, categories: categories, order: order, headers }))
    }, [page, text, categories, order])

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
                                    <Anchor className='card-anchor' to={'/mangas/'+manga._id+"/1"}>Read</Anchor>
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
