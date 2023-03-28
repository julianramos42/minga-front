import React from 'react'
import './chapterForm.css'
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import pic from '../../images/navBarProfile.png'
import Input from '../../components/Input/Input'
import SendBtn from '../../components/SendBtn/SendBtn'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import authorAction from "../../store/Profile/actions";
import { Link as Anchor } from 'react-router-dom'

const { read_author } = authorAction;

export default function ChapterForm() {
    const dispatch = useDispatch();
    let dataForm = useRef()
    let { manga_id } = useParams()
    async function handleSubmit(e) {
        e.preventDefault()

        let formInputs = []

        Object.values(dataForm.current).forEach((e) => {
            if (e.name) {
                formInputs.push(e.value)
            }
        })

        let data = {
            title: formInputs[0],
            order: formInputs[1],
            pages: formInputs[2].split(','),
            manga_id,
        }
        let url = 'https://minga-pjxq.onrender.com/api/chapters'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }

        try {
            await axios.post(url, data, headers)

            toast.success('Chapter created')
            dataForm.current.reset()
        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                toast.error('You need to Login')
            } else {
                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }

            }
        }
    }

    let author = useSelector((store) => store.author.author);
    let token = localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            dispatch(read_author());
        }
    }, []);

    return (
        <>
            {
                author?.active ? <div className='chapter'>
                    <div className='chapter-content'>
                        <section className='new-chapter'>
                            <H2 text='New Chapter' />
                            <Image src={pic} />
                        </section>
                        <form className='chapter-form' ref={dataForm} onSubmit={handleSubmit}>
                            <Input className='chapter-input' type='text' name='title' placeholder='Insert Title' />
                            <Input className='chapter-input' type='text' name='order' placeholder='Insert order' />
                            <Input className='chapter-input' type='text' name='pages' placeholder='Insert pages' />
                            <SendBtn />
                            <Toaster />
                        </form>
                    </div>
                </div> : <div className='noLogged'>
                    <Anchor to='/auth'>Please Register/Login</Anchor>
                    <p>Or</p>
                    <Anchor to='/author-form'>Become an Author</Anchor>
                </div>
            }
        </>
    )
}