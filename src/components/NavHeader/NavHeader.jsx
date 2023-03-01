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
    useEffect(() => {
        let url = `http://localhost:8080/auth/token`
        let token = localStorage.getItem('token')
        if (token) {
            let headers = {headers:{'Authorization':`Bearer ${token}`}}
            axios.post(url,null,headers)
        }
        
    },[])

    return (
        <div className='navHeader'>
            <div className='picAndText'>
                <Image className='profilePic' src={profilePic} alt='profile-picture' />
                <div className='nameAndMail'>
                    <H2 text='Lucas Ezequiel Silva' />
                    <P text='lucasezequielsilva@gmail.com' />
                </div>
            </div>
            <div onClick={handleRender} className='closeBtn'>
                <Image src={closeBtn} />
            </div>
        </div>
    )
}
