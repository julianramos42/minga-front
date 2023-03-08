import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function NavBody({handleRender}) {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = 'http://localhost:8080/api/auth/signout'

    async function handleLogout(){
        try{
            await axios.post(url,"",headers)
            toast.success("Logout Successful")
            localStorage.setItem('token', "")
            localStorage.setItem('user', "")
            handleRender()
          }catch(error){
            if(typeof error.response.data.message === 'string'){
             toast.error(error.response.data.message)
            }else{
             error.response.data.message.forEach(err => toast.error(err))
            }
        } 
    }

    return (
        <div className='navBody'>
            <Anchor to='/'>Home</Anchor>
            { token ? <Anchor to='/mangas/1'>Mangas</Anchor> : "" }
            { token ? <Anchor to='/author-form'>New Author</Anchor> : "" }
            { token ? <Anchor onClick={handleLogout}>Logout</Anchor>: "" }
            { token ? "" : <Anchor to='/auth'>Auth</Anchor> }
            { token ? "" : <Anchor to='/register' onClick={handleRender}>Register</Anchor> }
            { token ? "" : <Anchor to='/signin' onClick={handleRender}>Login</Anchor> }
        </div>
    )
}
