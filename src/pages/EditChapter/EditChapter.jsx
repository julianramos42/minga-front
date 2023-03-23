import React, { useEffect, useState } from 'react'
import './editchapter.css'
import EditChapterSection1 from '../../components/EditChapterSection1/EditChapterSection1'
import EditChapterSection2 from '../../components/EditChapterSection2/EditChapterSection2'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import chapterActions from '../../store/EditChapter/actions'
import authorAction from "../../store/Profile/actions";
import { Link as Anchor } from 'react-router-dom'

const { read_one_chapter } = chapterActions
const { read_author } = authorAction

export default function EditChapter() {
    let token = localStorage.getItem('token')

    const { manga_id } = useParams()
    const dispatch = useDispatch()
    let { chapters, title, chapter } = useSelector(store => store.editchapter)
    const [selectedChapter, setSelectedChapter] = useState(chapter)

    useEffect(() => {
        dispatch(read_one_chapter({ manga_id }))
    }, [])

    let author = useSelector((store) => store.author.author);
    useEffect(() => {
        if (token) {
            dispatch(read_author());
        }
    }, []);

    return (
        <>
            {
                author?.active ? <div className='EditChapter'>
                    <EditChapterSection1 chapterInfo={chapters} title={title} selectedChapter={selectedChapter} setSelectedChapter={(chapters) => setSelectedChapter(chapters)} />
                    <EditChapterSection2 selectedChapter={selectedChapter} />
                </div> : <div className='noLogged'>
                    <Anchor to='/auth'>Please Register/Login</Anchor>
                    <p>Or</p>
                    <Anchor to='/author-form'>Become an Author</Anchor>
                </div>
            }
        </>
    )
}
