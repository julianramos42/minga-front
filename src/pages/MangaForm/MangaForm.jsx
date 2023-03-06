import React, { useState } from 'react';
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import SendBtn from '../../components/SendBtn/SendBtn'
import pic from '../../images/navBarProfile.png'
import { useRef } from 'react';
import './mangaForm.css';
import axios from 'axios';

export default function CreateManga() {
    const [categorias, setCategorias ] = useState([])
    const [categoria, setCategoria ] = useState(null)
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let coverPhoto = useRef();

    const isDisabled = categoria == null;

    async function handleSubmit(e) {
        e.preventDefault();

        if (isDisabled) {
          alert("falta categoria");
          return;
        }

        const filteredCategory = categorias.find((category) => (category.name == categoria))
        let manga = {
            title: title.current.value,
            categoria: categoria,
            description: description.current.value,
            cover_photo: coverPhoto.current.value,
            category_id: filteredCategory._id     
        };
        console.log({filteredCategory});
        const url = 'http://localhost:8080/mangas'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        console.log(manga)
    try {
        await axios.post(url, manga, headers)
        alert("Manga created successfully")
            e.target.reset()
    
    } catch (error) {
        console.log(error)
        console.log("ocurrio un error")
    }
    }
    
    async function renderCategory () {
       await axios.get ('http://localhost:8080/mangas').then((response) => 
        { setCategorias(response.data.categories) } )
    }
    console.log(categorias)

return (
    <div className='author'>
        <div className='author-content'>
            <section className='new-author'>
                <H2 text='New Manga' />
                <Image src={pic} />
            </section>
            <form className='author-form' onSubmit={handleSubmit}>
                    <input className='author-input' type='text' placeholder='Insert title' ref={title} />
                    <select className='author-input' id='selectMove' ref={category} onClick={renderCategory} onChange={(e)=> setCategoria(e.target.value)}>
                    <option value=''> Insert category</option>
                        {categorias.map(categoria =>  <option key={categoria.name} value={categoria.name}>{categoria.name}</option>)}
                    </select>
                    <input className='author-input' type='text' placeholder='Insert description' ref={description} />
                    <input className='author-input' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
                    <SendBtn/>
            </form>
        </div>
    </div>
)
}


