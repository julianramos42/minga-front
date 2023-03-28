import React from 'react'
import './authorForm.css'
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import pic from '../../images/navBarProfile.png'
import Input from '../../components/Input/Input'
import SendBtn from '../../components/SendBtn/SendBtn'
import { useRef } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link as Anchor } from 'react-router-dom'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authorAction from "../../store/Profile/actions";
// import alertActions from '../../store/Alert/actions'

// const { open, close } = alertActions
const { read_author } = authorAction;

export default function AuthorForm() {
    // const store = useSelector(store => store)
    let dispatch = useDispatch()

    let dataForm = useRef()
    let url = 'https://minga-pjxq.onrender.com/api/authors'
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    async function handleSubmit(e) {
        e.preventDefault()

        let formInputs = []

        Object.values(dataForm.current).forEach((e) => {
            if (e.name) {
                formInputs.push(e)
            }
        })

        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
            city: formInputs[2].value.split(',')[0],
            country: formInputs[2].value.split(',')[1],
            [formInputs[3].name]: formInputs[3].value,
            [formInputs[4].name]: formInputs[4].value,
           
        }

        // let dataOpen = {
        //     icon: 'success',
        //     text: 'redux'
        // }
        // let dataClose = {
        //     icon: 'error',
        //     text: 'redux'
        // }
        // dispatch(open(dataOpen))


        try {
            await axios.post(url, data, headers).then(res => toast.success(res.data.message))
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
    useEffect(() => {
        if (token) {
            dispatch(read_author());
        }
    }, []);

    return (
        <>
            {
                token ? (
                    author ?
                        <div className='authorForm'>
                            <div className='authorForm-content'>
                                <section className='new-authorForm'>
                                    <H2 text='New Author' />
                                    <Image src={pic} />
                                </section>
                                <form className='authorForm-form' ref={dataForm} onSubmit={handleSubmit}>
                                    <input defaultValue={author.name} className='authorForm-input' type='text' name='name' placeholder='First Name' />
                                    <input defaultValue={author.last_name} className='authorForm-input' type='text' name='last_name' placeholder='Last Name' />
                                    <input className='authorForm-input' type='text' name='location' placeholder='City, Country' />
                                    <input className='authorForm-input' type='text' name='date' placeholder='Birthdate MM/DD/YY' />
                                    <input defaultValue={author.photo} className='authorForm-input' type='text' name='photo' placeholder='URL Profile Image' />
                                    <SendBtn />
                                    <Toaster />
                                </form>
                            </div>
                        </div>
                        :
                        <div className='authorForm'>
                            <div className='authorForm-content'>
                                <section className='new-authorForm'>
                                    <H2 text='New Author' />
                                    <Image src={pic} />
                                </section>
                                <form className='authorForm-form' ref={dataForm} onSubmit={handleSubmit}>
                                    <input className='authorForm-input' type='text' name='name' placeholder='First Name' />
                                    <input className='authorForm-input' type='text' name='last_name' placeholder='Last Name' />
                                    <input className='authorForm-input' type='text' name='location' placeholder='City, Country' />
                                    <input className='authorForm-input' type='text' name='date' placeholder='Birthdate MM/DD/YY' />
                                    <input className='authorForm-input' type='text' name='photo' placeholder='URL Profile Image' />
                                    <SendBtn />
                                    <Toaster />
                                </form>
                            </div>
                        </div>
                ) : <div className='noLogged'><Anchor to='/auth'>Please Register or Login</Anchor></div>
            }
        </>
    )
}
