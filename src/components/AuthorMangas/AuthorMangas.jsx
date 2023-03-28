import React from 'react'
import './authorMangas.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import Image from '../../components/Image/Image'
import H2 from '../../components/H2/H2'
import { useDispatch } from 'react-redux'
import mangasActions from '../../store/MangasFromAuthor/actions.js'
import { Link as Anchor } from 'react-router-dom'

export default function AuthorMangas() {
    let mangasFromAuthor = useSelector(store => store.mangas_from_author.mangas)

    let dispatch = useDispatch()
    let checkOrder = useSelector(store => store.check.checked)

    let id = useParams().id
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    const { read_mangas_from_author } = mangasActions

    useEffect(() => {
        dispatch(read_mangas_from_author({ id: id, mangaOrder: checkOrder, headers: headers }))
    }, [checkOrder])

    return (
        <div className='displayed-mangas' >
            {
                mangasFromAuthor.length ?
                    mangasFromAuthor.map((manga, i) => {
                        let card = <Anchor to={'/mangas/'+manga._id+'/1'} key={i}>
                            <div className='mangaCard'>
                                <Image className='manga-img' src={manga.cover_photo} />
                                <H2 text={manga.title} />
                            </div>
                        </Anchor>
                        return card
                    })
                    : <H2 text='No mangas founded' />
            }
        </div>
    )
}
