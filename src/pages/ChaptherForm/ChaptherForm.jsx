import React from 'react'
import './chaptherForm.css'
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import pic from '../../images/navBarProfile.png'
import Input from '../../components/Input/Input'
import SendBtn from '../../components/SendBtn/SendBtn'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

export default function ChaptherForm() {
    let dataForm = useRef()
    let {manga_id} = useParams()
    async function handleSubmit(e){
        e.preventDefault()

        let formInputs = []
        
        Object.values(dataForm.current).forEach( (e) => {
            if(e.name){
                formInputs.push(e.value)
            }
        } )

        let data = {
            title : formInputs[0],
            order: formInputs[1],
            pages: formInputs[2].split(','),
            manga_id,
        }
        let url = 'http://localhost:8080/chapthers'
        let token = localStorage.getItem('token')
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        
        try{
            await axios.post(url,data,headers)
           
           toast.success('Chapther created')
            dataForm.current.reset()
          }catch(error){

            if(typeof error.response.data.message === 'string'){
                toast.error(error.response.data.message)
               }else{
                error.response.data.message.forEach(err => toast.error(err))
               }
        }      
    }

  return (
    <div className='chapther'>
        <div className='chapther-content'>
            <section className='new-chapther'>
                <H2 text='New Chapther' />
                <Image src={pic} />
            </section>
            <form className='chapther-form' ref={dataForm} onSubmit={handleSubmit}>
                <Input className='chapther-input' type='text' name='title' placeholder='Insert Title'/>
                <Input className='chapther-input' type='text' name='order' placeholder='Insert order'/>
                <Input className='chapther-input' type='text' name='pages' placeholder='Insert pages'/>
                <SendBtn />
                <Toaster />
            </form>
        </div>
    </div>
  )
}