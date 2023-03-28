import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authorAction from "../../store/Profile/actions";
import logoutActions from '../../store/LogoutReload/actions'

const { read_author } = authorAction;
const { logoutReload } = logoutActions

export default function NavBody({ handleRender }) {
    const dispatch = useDispatch();

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = 'http://localhost:8080/api/auth/signout'
    let user = JSON.parse(localStorage.getItem('user'))

    async function handleLogout() {
        try {
            await axios.post(url, "", headers)
            toast.success("Logout Successful")
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            handleRender()
            dispatch(logoutReload({ state: true }))
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
            if (author.active) {
                dispatch(read_author());
            }
        }
    }, []);

    return (
        <div className='navBody'>
            <Anchor to='/'>Home</Anchor>
            {token ? <Anchor to='/mangas/1'>Mangas</Anchor> : ""}
            {token ? <Anchor to='/myreactions/1' >My Reactions</Anchor> : ""}
            {token ? <Anchor to='/new-role'>New Role</Anchor> : ""}
            {token && author?.active ? <Anchor to='/profile'>Author Profile</Anchor> : ''}
            {token && author?.active ? <Anchor to='/mymangas/1' >My Mangas</Anchor> : ""}
            {token && author?.active ? <Anchor to='/manga-form'>New Manga</Anchor> : ""}
            {token && user.admin ? <Anchor to='/admin'>Admin Panel</Anchor> : ''}
            {token ? "" : <Anchor to='/register' onClick={handleRender}>Register</Anchor>}
            {token ? "" : <Anchor to='/signin' onClick={handleRender}>Login</Anchor>}
            {token ? <Anchor to='/' onClick={handleLogout}>Logout</Anchor> : ""}
        </div>
    )
}
