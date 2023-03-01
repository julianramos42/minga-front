import React from 'react'
import './authorForm.css'
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import pic from '../../images/navBarProfile.png'
import Input from '../../components/Input/Input'
import SendBtn from '../../components/SendBtn/SendBtn'
import { useRef } from 'react'
import axios from 'axios'

export default function AuthorForm() {
    let dataForm = useRef()

    async function handleSubmit(e){
        let formInputs = []
        e.preventDefault()
        
        Object.values(dataForm.current).forEach( (e) => {
            if(e.name){
                formInputs.push(e.value)
            }
        } )
        
        formInputs[2] = formInputs[2].split(',')
        
        let data = {
            [formInputs[0].name]: formInputs[0].value,
            [formInputs[1].name]: formInputs[1].value,
            [formInputs[2].name]: formInputs[2].value,
            [formInputs[3].name]: formInputs[3].value,
            [formInputs[4].name]: formInputs[4].value,
        }

        let url = 'http://localhost:8080/author-form'
        // try{
        //     await axios.post(url,data)
        //     alert("Registro exitoso")
        //     dataForm.current.reset()
        //   }catch(error){
        //     console.log(error)
        //     console.log("ocurrio un error")
        // }      
    }

  return (
    <div className='author'>
        <div className='author-content'>
            <section className='new-author'>
                <H2 text='New Author' />
                <Image src={pic} />
            </section>
            <form className='author-form' ref={dataForm} onSubmit={handleSubmit}>
                <Input className='author-input' type='text' name='firstName' placeholder='First Name'/>
                <Input className='author-input' type='text' name='lastName' placeholder='Last Name'/>
                <Input className='author-input' type='text' name='location' placeholder='City, Country'/>
                <Input className='author-input' type='date' name='date' placeholder='dd/mm/yy'/>
                <Input className='author-input' type='text' name='url' placeholder='URL Profile Image'/>
                <SendBtn />
            </form>
        </div>
    </div>
  )
}
