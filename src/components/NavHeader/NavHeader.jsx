import React from 'react'
import './navHeader.css'
import Image from '../Image/Image'
import H2 from '../H2/H2'
import P from '../P/P'
import profilePic from '../../images/navBarProfile.png'
import closeBtn from '../../images/closeBtn.svg'
import axios from 'axios'
import { useEffect } from 'react'

export default function NavHeader({handleRender}) {
    let token = localStorage.getItem('token')
    
    if(!token){
        localStorage.setItem('user',JSON.stringify({
            name: "",
            mail: "",
            photo: ""
        }))
    }

    let user = JSON.parse(localStorage.getItem('user'))
    let name = user.name
    let mail = user.mail
    let photo = user.photo

    useEffect(() => {
        let url = `http://localhost:8080/auth/token`
        if (token) {
            let headers = {headers:{'Authorization':`Bearer ${token}`}}
            axios.post(url,null,headers)
        }
    },[])

    return (
        <div className='navHeader'>
        
            {
                token ? <div className='picAndText'>
                        <Image className='profilePic' src={photo} alt='profile-picture' />
                        <div className='nameAndMail'>
                            <H2 text={name} />
                            <P text={mail} />
                        </div>
                        </div>
                        : ""
            }
            <div onClick={handleRender} className='closeBtn'>
                <Image src={closeBtn} />
            </div>
        </div>
    )
}
