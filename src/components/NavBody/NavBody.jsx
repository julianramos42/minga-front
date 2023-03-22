import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import authorAction from "../../store/Profile/actions";
import logoutActions from '../../store/LogoutReload/actions'

const { read_author } = authorAction;
const { logoutReload } = logoutActions

export default function NavBody({ handleRender }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(true);

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = 'http://localhost:8080/api/auth/signout'

    async function handleLogout() {
        try {
            await axios.post(url, "", headers)
            toast.success("Logout Successful")
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            handleRender()
            dispatch(logoutReload({state:true}))
        } catch (error) {
            if (typeof error.response.data.message === 'string') {
                toast.error(error.response.data.message)
            } else {
                error.response.data.message.forEach(err => toast.error(err))
            }
        }
    }
    
    let author = useSelector((store) => store.author.author);
    useEffect(() => {
        if(token){
            if (author) {
                dispatch(read_author());
            }
        }
    }, [isOpen]);

    return (
        <div className='navBody'>
            <Anchor to='/'>Home</Anchor>
            {token ? <Anchor to='/mangas/1'>Mangas</Anchor> : ""}
            {token ? <Anchor to='/mymangas/1' >My Mangas</Anchor> : ""}
            {token ? <Anchor to='/myreactions/1' >My Reactions</Anchor> : ""}
            {token ? <Anchor to='/author-form'>New Author</Anchor> : ""}
            {token ? <Anchor to='/manga-form'>New Manga</Anchor> : ""}
            {token && author?.active ? <Anchor to='/profile'>Author-Profile</Anchor> : ''}
            {token ? "" : <Anchor to='/register' onClick={handleRender}>Register</Anchor>}
            {token ? "" : <Anchor to='/signin' onClick={handleRender}>Login</Anchor>}
            {token ? <Anchor to='/' onClick={handleLogout}>Logout</Anchor> : ""}
        </div>
    )
}
