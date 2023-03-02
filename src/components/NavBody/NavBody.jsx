import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function NavBody({handleRender}) {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = 'http://localhost:8080/auth/signout'

    async function handleLogout(){
        try{
            await axios.post(url,"",headers)
            toast.success("Usuario deslogueado")
            localStorage.setItem('token', "")
            localStorage.setItem('photo', "")
            localStorage.setItem('name', "")
            localStorage.setItem('mail', "")
            handleRender()
          }catch(error){
            console.log(error)
            toast.error("Ocurrio un error")
        }      
    }

    return (
        <div className='navBody'>
            <Anchor to='/index'>Home</Anchor>
            {/* <Anchor to='/'>Mangas</Anchor>
            <Anchor to='/'>My mangas</Anchor>
            <Anchor to='/'>Favourites</Anchor> */}
            <Anchor to='/auth'>Auth</Anchor>
            { token ? <Anchor onClick={handleLogout}>Logout</Anchor>: <><Anchor to='/register' onClick={handleRender}>Register</Anchor><Anchor to='/signin' onClick={handleRender}>Login</Anchor></> }
            <Toaster position='top-left' />
        </div>
    )
}
