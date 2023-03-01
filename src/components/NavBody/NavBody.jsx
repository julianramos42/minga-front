import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'

export default function NavBody() {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = 'http://localhost:8080/auth/signout'

    async function handleLogout(){
        try{
            await axios.post(url,"",headers) // guardar en local storage el token
            alert("Usuario deslogueado")
          }catch(error){
            console.log(error)
            console.log("ocurrio un error")
        }      
    }

    return (
        <div className='navBody'>
            <Anchor to='/index'>Home</Anchor>
            <Anchor to='/'>Mangas</Anchor>
            <Anchor to='/'>My mangas</Anchor>
            <Anchor to='/'>Favourites</Anchor>
            <Anchor to='/auth'>Auth</Anchor>
            <Anchor to='/author-form'>New Author</Anchor>
            <Anchor onClick={handleLogout}>Logout</Anchor>
        </div>
    )
}
