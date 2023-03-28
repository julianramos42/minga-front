import React, { useState } from 'react';
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import SendBtn from '../../components/SendBtn/SendBtn'
import pic from '../../images/navBarProfile.png'
import { useRef } from 'react';
import './mangaForm.css';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authorAction from "../../store/Profile/actions";
import { Link as Anchor } from 'react-router-dom';

const { read_author } = authorAction;

export default function CreateManga() {
  const dispatch = useDispatch();

  let token = localStorage.getItem('token')

  const [categorias, setCategorias] = useState([])
  const [categoria, setCategoria] = useState(null)
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

    const url = 'https://minga-pjxq.onrender.com/api/mangas'
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    try {
      await axios.post(url, manga, headers)
      toast.success("Manga created successfully")
      e.target.reset()

    } catch (error) {
      if (typeof error.response.data.message === 'string') {
        toast.error(error.response.data.message)
      } else {
        error.response.data.message.forEach(err => toast.error(err))
      }
    }
  }

  async function renderCategory() {
    await axios.get('http://localhost:8080/api/categories').then((response) => { setCategorias(response.data.categories) })
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
        author?.active ? <div className="manga">
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
        </div> : <div className='noLogged'>
          <Anchor to='/auth'>Please Register/Login</Anchor>
          <p>Or</p>
          <Anchor to='/author-form'>Become an Author</Anchor>
        </div>
      }
    </>
  );
}


