import React from 'react'
import './authorInfo.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import H2 from '../H2/H2'
import Image from '../Image/Image'
import { useParams } from 'react-router-dom'
import location from '../../images/location.svg'
import cake from '../../images/cake.svg'
import edit from '../../images/edit.svg'

export default function AuthorInfo() {
    let [author, setAuthor] = useState("")

    let id = useParams().id
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        axios.get("http://localhost:8080/api/authors/"+id, headers).then(res => setAuthor(res.data.author))
    }, [])

    let fullName = ''
    if(author.name){
        fullName += author.name
    }
    if(author.last_name){
        fullName += ' '+author.last_name 
    }

    return (
        <div className='authorInfo'>
            {
                author ? <div className='authorInfo-data'>
                    <Image src={author.photo} className='authorInfo-pic' />
                    <div className='authorInfo-text'>
                        <H2 text={fullName} />
                        <div className='imgAndText'>
                            <Image src={location} />
                            <p>{author.city + ", " + author.country}</p>
                            <Image src={edit} className='editBtn' />
                        </div>
                        {author.date ? <div className='imgAndText'>
                            <Image src={cake} />
                            <p>{author.date}</p>
                        </div> : ""}
                    </div>
                </div>
                    : ""
            }
            <hr />
        </div>
    )
}
