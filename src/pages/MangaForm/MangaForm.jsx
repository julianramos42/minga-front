import React, { useState } from 'react';
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import SendBtn from '../../components/SendBtn/SendBtn'
import pic from '../../images/navBarProfile.png'
import { useRef } from 'react';
import './mangaForm.css';
import toast, { Toaster } from "react-hot-toast";
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
          toast.error("Select a category");
          return;
        }

        const filteredCategory = categorias.find((category) => (category.name == categoria))
        let manga = {
            title: title.current.value,
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
        toast.success("Manga created successfully")
            e.target.reset()
    
    } catch (error) {
        console.log(error)
        toast.error("Cant create manga");
    }
    }
    
    async function renderCategory () {
       await axios.get ('http://localhost:8080/mangas').then((response) => 
        { setCategorias(response.data.categories) } )
    }
    console.log(categorias)

return (
  <div className="manga">
    <div className="manga-content">
      <section className="new-manga">
        <H2 text="New Manga" />
        <Image src={pic} />
      </section>
      <form className="manga-form" onSubmit={handleSubmit}>
        <input
          className="manga-input"
          type="text"
          placeholder="Insert title"
          ref={title}
        />
        <select
          className="manga-input"
          id="selectMove"
          ref={category}
          onClick={renderCategory}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value=""> Insert category</option>
          {categorias.map((categoria) => (
            <option key={categoria.name} value={categoria.name}>
              {categoria.name}
            </option>
          ))}
        </select>
        <input
          className="manga-input"
          type="text"
          placeholder="Insert description"
          ref={description}
        />
        <input
          className="manga-input"
          type="text"
          placeholder="Insert cover photo"
          ref={coverPhoto}
        />
        <SendBtn />
        <Toaster />
      </form>
    </div>
  </div>
);
}


