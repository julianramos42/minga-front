import React, { useRef } from 'react'
import './formcompany.css'
import { useParams } from 'react-router-dom'
import image from "../../images/default-profile.png"
import Input from '../Input/Input'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function FormCompany() {
    let dataForm = useRef()
    let { user_id } = useParams()
    async function handleSubmit(e) {
        e.preventDefault()

        let formInputs = []
        Object.values(dataForm.current).forEach(e => {
            if (e.name) {
                formInputs.push(e.value)
            }
        })


        let data = {
            name: formInputs[0],
            logo: formInputs[1],
            website: formInputs[2],
            description: formInputs[3],
            user_id
        }

        let url = 'http://localhost:8080/api/companies'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }

        try {
            await axios.post(url, data, headers)
            toast.success('Company created')
            dataForm.current.reset()

        } catch (error) {
            console.log(error)

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
    return (
        <div id="companybox">
            <div id="companycontent">
                <div id="newCompany" >
                    <h2>New Company</h2>
                </div>

                <div>
                    <img src={image} alt="profile" />
                </div>

                <form id="companyform" ref={dataForm} onSubmit={handleSubmit}>
                    <Input className='companyinput' type='text' name='name' placeholder='Name' />
                    <Input className='companyinput' type='url' name='logo' placeholder='Logo' />
                    <Input className='companyinput' type='url' name='website' placeholder='Web Site' />
                    <Input className='companyinput' type='text' name='description' placeholder='Description' />
                    <Input id='send' type='submit' value='Send' />
                </form>
            </div>
        </div>
    )
}
