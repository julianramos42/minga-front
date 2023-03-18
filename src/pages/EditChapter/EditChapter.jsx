import React, { useEffect, useState } from 'react'
import './editchapter.css'
import EditChapterSection1 from '../../components/EditChapterSection1/EditChapterSection1'
import EditChapterSection2 from '../../components/EditChapterSection2/EditChapterSection2'
import { useParams } from 'react-router-dom'
import chapterActions from '../../store/EditChapter/actions'
import { useDispatch, useSelector } from 'react-redux'
// import axios from "axios";

const { read_one_chapter } = chapterActions

export default function EditChapter() {
    const id = useParams()
    const dispatch = useDispatch()
    let chapter = useSelector(store => store.editchapter.chapters)
    console.log('soy los capitulos', chapter)
    const [selectedChapter, setSelectedChapter] = useState(null)

    useEffect(() => {
        dispatch(read_one_chapter({ manga_id: id.manga_id }))
    }, [])
    


    return (
        <>
            <div className='EditChapter'>
                <EditChapterSection1 chapterInfo={chapter} selectedChapter={selectedChapter} setSelectedChapter={(chapter) => setSelectedChapter(chapter)} />
                <EditChapterSection2 selectedChapter={selectedChapter} />
            </div>
        </>
    )
}
