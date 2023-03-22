import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './editchapterform.css'
import chapterActions from '../../store/EditChapter/actions'
import { Toaster } from "react-hot-toast";
import DeleteChapterModal from '../DeleteChapterModal/DeleteChapterModal'
import EditChapterModal from '../EditChapterModal/EditChapterModal';
import deleteModalActions from '../../store/RenderDeleteModal/actions'
import modalActions from '../../store/RenderEditModal/actions'




const { /*delete_one_chapter, edit_one_chapter*/ getInfo } = chapterActions

export default function EditChapterForm({ chapterInfo, setSelectedChapter, selectedChapter, title }) {
    let { order } = useSelector(store => store.editchapter)
    let editModalState = useSelector(store => store.modalState.state)
    let deleteModalState = useSelector(store => store.modalDeleteState.state)

    const [orderToEdit, setOrderToEdit] = useState(order)
    const [data, setData] = useState(null)
    const [newData, setNewData] = useState(null)
    const [reload, setReload] = useState(false)
    const dispatch = useDispatch()
    const headers = { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    const { renderDeleteModal } = deleteModalActions
    const { renderModal } = modalActions

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
        dispatch(renderModal({ state: true }))

        let editedChapter = {
            [data]: newData
        }
        let info = { _id: selectedChapter._id, data: editedChapter, headers: headers }
        setReload(!reload)
    }

    async function handleDelete(event) {
        event.preventDefault()
        dispatch(renderDeleteModal({ state: true }))

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
                <button className='btn-delete' disabled={orderToEdit === null ? true : false} onClick={(event) => handleDelete(event)}>Delete</button>
                {editModalState ? <EditChapterModal selectedChapter={selectedChapter} data={data} newData={newData} /> : ""}
                {deleteModalState ? <DeleteChapterModal selectedChapter={selectedChapter} /> : ""}
                <Toaster />
            </form>
        </>
    )
}
