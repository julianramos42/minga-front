import React, { useEffect, useState } from 'react'
import './editchapter.css'
import EditChapterSection1 from '../../components/EditChapterSection1/EditChapterSection1'
import EditChapterSection2 from '../../components/EditChapterSection2/EditChapterSection2'
import { useParams } from 'react-router-dom'
import chapterActions from '../../store/EditChapter/actions'
import { useDispatch, useSelector } from 'react-redux'

const { read_one_chapter } = chapterActions

export default function EditChapter() {
    const {manga_id} = useParams()
    const dispatch = useDispatch()
    let {chapters, title, chapter} = useSelector(store => store.editchapter)
    const [selectedChapter, setSelectedChapter] = useState(chapter)
   

    useEffect(() => {
        dispatch(read_one_chapter({ manga_id }))
    }, [])
    


    return (
        <>
            <div className='EditChapter'>
                <EditChapterSection1 chapterInfo={chapters} title={title} selectedChapter={selectedChapter} setSelectedChapter={(chapters) => setSelectedChapter(chapters)} />
                <EditChapterSection2 selectedChapter={selectedChapter} />
            </div>
        </>
    )
}
