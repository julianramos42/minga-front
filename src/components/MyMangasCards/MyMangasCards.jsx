import React from 'react'
import './myMangasCards.css'
import H2 from '../H2/H2'
import Image from '../../components/Image/Image'
import { useEffect } from 'react'
import mangasActions from '../../store/MyMangas/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link as Anchor } from 'react-router-dom'
import plusIcon from '../../images/plusIcon.svg'
import editIcon from '../../images/editIcon.svg'
import EditModal from '../EditModal/EditModal'
import modalActions from '../../store/RenderModal/actions'

export default function MyMangasCards() {
    let mangas = useSelector(store => store.myMangas.myMangas)
    let categories = useSelector(store => store.categories.categories)
    let order = useSelector(store => store.order.order)
    let page = useParams().page
    let modalState = useSelector(store => store.modalState.state)

    const { read_myMangas } = mangasActions
    const { renderModal } = modalActions
    const dispatch = useDispatch()

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        dispatch(read_myMangas({ page: page, categories: categories, order: order, headers }))
    }, [page, categories, order, modalState])

    function handleEdit(e){
        dispatch(renderModal({state: true, id: e.target.id}))
    }

    return (
        <div className='mangas-cards'>
            {
                mangas.length ? mangas.map((manga, i) => {
                    let card =
                        <section className='card' key={i}>
                            <div className='card-text'>
                                <div className='card-color'></div>
                                <div className='text'>
                                    <div className='createAndEdit-icons'>
                                        <Anchor to={'/chapter-form/' + manga._id}><Image src={plusIcon} /></Anchor>
                                        <Anchor to={'/edit/' + manga._id}><Image src={editIcon} /></Anchor>
                                    </div>
                                    <div>
                                        <H2 text={manga.title} />
                                        <span>{manga.category_id.name}</span>
                                    </div>
                                    <div className='actions-btns'>
                                        <Anchor className='myMangas-card-anchor' to={'/mangas/' + manga._id + "/1"}>Read</Anchor>
                                        <Anchor id={manga._id} className='myMangas-card-anchor editBtn' onClick={handleEdit}>Edit</Anchor>
                                        <Anchor className='myMangas-card-anchor deleteBtn'>Delete</Anchor>
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
            { modalState ? <EditModal /> : "" }
        </div>
    )
}
