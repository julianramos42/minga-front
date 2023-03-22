import React from 'react'
import './deleteModal.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import toast, { Toaster } from "react-hot-toast";
import deleteModalActions from '../../store/RenderDeleteModal/actions'
import axios from 'axios';

export default function DeleteModal() {
    let deleteId = useSelector(store => store.modalDeleteState.id)

    const { renderDeleteModal } = deleteModalActions
    const dispatch = useDispatch()

    function handleClose() {
        dispatch(renderDeleteModal({ state: false }))
    }

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    const url = 'http://localhost:8080/api/mangas/' + deleteId

    async function handleDelete() {
        try {
            await axios.delete(url, headers)
            toast.success("Manga deleted successfully")
            setTimeout(() => {
                handleClose()
            }, 1500)
        } catch (error) {
            if (error.response) {
                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }
            } else {
                toast.error(error.message)
            }
        }
    }

    return (
        <div className='delete-modal'>
            <h2>Delete this manga?</h2>
            <div className='modal-btns'>
                <p onClick={handleDelete}>Delete</p>
                <p onClick={handleClose}>Cancel</p>
            </div>
            <Toaster />
        </div>
    )
}
