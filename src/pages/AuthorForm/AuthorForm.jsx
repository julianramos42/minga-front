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

export default function AuthorForm() {
    let dataForm = useRef()

    async function handleSubmit(e){
        e.preventDefault()
        
        let formInputs = []

        Object.values(dataForm.current).forEach( (e) => {
            if(e.name){
                formInputs.push(e)
            }
        } )
        
        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
            city: formInputs[2].value.split(',')[0],
            country: formInputs[2].value.split(',')[1],
            [formInputs[3].name]: formInputs[3].value,
            [formInputs[4].name]: formInputs[4].value,
        }

        let url = 'http://localhost:8080/author-form'
        let token = localStorage.getItem('token')
        let headers = {headers:{'Authorization':`Bearer ${token}`}}

        try{
            await axios.post(url,data,headers)
            toast.success("New Author Created")
            dataForm.current.reset()
        }catch(error){
            toast.error("Something Went Wrong")
        }
    }

  return (
    <div className='author'>
        <div className='author-content'>
            <section className='new-author'>
                <H2 text='New Author' />
                <Image src={pic} />
            </section>
            <form className='author-form' ref={dataForm} onSubmit={handleSubmit}>
                <Input className='author-input' type='text' name='name' placeholder='First Name'/>
                <Input className='author-input' type='text' name='last_name' placeholder='Last Name'/>
                <Input className='author-input' type='text' name='location' placeholder='City, Country'/>
                <Input className='author-input' type='text' name='date' placeholder='Birthdate MM/DD/YY'/>
                <Input className='author-input' type='text' name='photo' placeholder='URL Profile Image'/>
                <SendBtn />
                <Toaster />
            </form>
        </div>
    </div>
  )
}
