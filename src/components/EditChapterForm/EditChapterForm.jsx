import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './editchapterform.css'
import chapterActions from '../../store/EditChapter/actions'
import  { Toaster } from "react-hot-toast";


const { delete_one_chapter, edit_one_chapter, getInfo } = chapterActions

export default function EditChapterForm({ chapterInfo, setSelectedChapter, selectedChapter, title }) {
    let { order } = useSelector(store => store.editchapter)
    const [orderToEdit, setOrderToEdit] = useState(order)
    const [data, setData] = useState(null)
    const [newData, setNewData] = useState(null)
    const [reload, setReload] = useState(false)
    const dispatch = useDispatch()
    const headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }


    let infoChapter = chapterInfo?.length > 0 ? Object.keys(chapterInfo[0]) : []

    useEffect(() => {
        if (chapterInfo?.length > 0) {
            let chapter = chapterInfo.find(data => data.order === orderToEdit)
            setSelectedChapter(chapter)
            dispatch(getInfo({ order: orderToEdit, chapter }))
        }
    }, [orderToEdit, reload])

    function handleSend(event) {
        event.preventDefault()
        let editedChapter = {
            [data]: newData
        }
        let info = { _id: selectedChapter._id, data: editedChapter, headers: headers }
        dispatch(edit_one_chapter(info))
        setReload(!reload)
    }

    async function handleDelete(event) {
        event.preventDefault()
        dispatch(delete_one_chapter({ _id: selectedChapter._id, headers: headers }))

    }
    return (
        <>
            <form action="" className='form-edit'>
                <p className='titleChapter-toEdit'>{title}</p>
                <select
                    name=""
                    id=""
                    placeholder=''
                    onChange={(e) => setOrderToEdit(Number(e.target.value))}
                >
                    {data === null && <option value="">Seleccione uno</option>}

                    {
                        chapterInfo?.map(chapter => {
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
                        infoChapter?.map((chapter, i) => {
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
                <Toaster />
            </form>
        </>
    )
}
