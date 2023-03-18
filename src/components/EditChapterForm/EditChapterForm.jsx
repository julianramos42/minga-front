import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './editchapterform.css'
import chapterActions from '../../store/EditChapter/actions'

const { delete_one_chapter } = chapterActions

export default function EditChapterForm({ chapterInfo, setSelectedChapter, selectedChapter }) {

    const [order, setOrder] = useState(null)
    const [data, setData] = useState(null)
    const [newData, setNewData] = useState(null)
    const dispatch = useDispatch()
    const headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }

    let infoChapter = chapterInfo.length > 0 ? Object.keys(chapterInfo[0]) : []

    useEffect(() => {
        if (chapterInfo.length > 0) {
            let chapter = chapterInfo.filter(data => data.order === order)
            setSelectedChapter(chapter[0])
        }
    }, [order])

    useEffect(() => {
        if (chapterInfo.length > 0) {
            setOrder(1)
        }
    }, [chapterInfo])

    function handleSend(event) {
        event.preventDefault()
        let editedChapter = {
            [data]: newData
        }
        console.log(editedChapter, selectedChapter._id)
    }
    function handleDelete(event) {
        event.preventDefault()
        dispatch(delete_one_chapter({ _id: selectedChapter._id , headers: headers}))
    }



    return (
        <>
            <form action="" className='form-edit'>
                <input type="text" placeholder='name of the manga' />
                <select
                    name=""
                    id=""
                    placeholder=''
                    onChange={(e) => setOrder(Number(e.target.value))}
                >
                    {
                        chapterInfo.map(chapter => {
                            return (
                                <option key={chapter._id} value={chapter.order}>{chapter.order}</option>
                            )
                        })
                    }
                </select>
                <select
                    name=""
                    id=""
                    placeholder='select data'
                    onChange={(e) => setData(e.target.value)}
                >
                    {data === null && <option value="">Seleccione uno</option>}

                    {
                        infoChapter.map((chapter, i) => {
                            if (chapter !== "manga_id" && chapter !== "_id") {
                                return (
                                    <option key={i} value={chapter}>{chapter}</option>
                                )
                            }
                        })
                    }
                </select>
                <input type="text" placeholder='data to edit' disabled={data === null ? true : false} value={newData} onChange={(e) => setNewData(e.target.value)} />

                <button className='btn-edit' disabled={newData === null ? true : false} onClick={(event) => handleSend(event)} >Edit</button>
                <button className='btn-delete' onClick={(event) => handleDelete(event)}>Delete</button>
            </form>
        </>
    )
}
