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
    let photo = localStorage.getItem('photo')
    let name = localStorage.getItem('name')
    let mail = localStorage.getItem('mail')
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
