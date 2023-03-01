import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function NavBody() {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = 'http://localhost:8080/auth/signout'

    async function handleLogout(){
        try{
            await axios.post(url,"",headers)
            toast.success("Usuario deslogueado")
            localStorage.setItem('token', "")
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
            <Anchor to='/register'>Register</Anchor>
            <Anchor to='/signin'>Login</Anchor>
            <Anchor onClick={handleLogout}>Logout</Anchor>
            <Toaster position='top-left' />
        </div>
    )
}
