import React, { useEffect, useState } from 'react';
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import SendBtn from '../../components/SendBtn/SendBtn'
import pic from '../../images/navBarProfile.png'
import { useRef } from 'react';
import './mangaForm.css';
import axios from 'axios';

export default function CreateManga() {
    const [categorias, setCategorias ] = useState([])
    const [selectValue, setSelectValue] = useState([]);
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let coverPhoto = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        let manga = {
            title: title.current.value,
            category: category.current.value,
            description: description.current.value,
            coverPhoto: coverPhoto.current.value,
            
        };
        console.log(manga);
        const url = 'http://localhost:8080/mangas'
    try {
        await axios.post(url, manga)
        alert("Manga created successfully")
            // e.target.reset()
            console.log(setSelectValue())
    
    } catch (error) {
        // console.log(error)
        console.log("ocurrio un error")
    }
    }
    const handleSelectChange = (event) => {
        setSelectValue(console.log(event.target.value));
        
    };
    
    
    useEffect( ()=>  { 
        axios.get ('http://localhost:8080/categorias').then((response) => 
        { setCategorias(response.data) } )
        

        
    }, [] ) 
    // console.log(categorias)

return (
    <div className='author'>
        <div className='author-content'>
            <section className='new-author'>
                <H2 text='New Author' />
                <Image src={pic} />
            </section>
            <form className='author-form' onSubmit={handleSubmit}>
                    <input className='author-input' type='text' placeholder='Insert title' ref={title} />
                    <select className='author-input' id='selectMove' ref={category} value={selectValue} onChange={handleSelectChange}>
                    <option value=''> Insert category</option>
                        {categorias.map(categoria =>  <option key={categoria.value} value={categoria.value}>{categoria.name}</option>
                        )}
                        {/* <option value='action'>Action</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='drama'>Drama</option> */}
                    </select>
                    <input className='author-input' type='text' placeholder='Insert description' ref={description} />
                    <input className='author-input' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
                    <SendBtn/>
            </form>
        </div>
    </div>
)
}


