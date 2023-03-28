import React from 'react'
import './myMangas.css'
import MangasType from '../../components/MangasType/MangasType'
import MyMangasCards from '../../components/MyMangasCards/MyMangasCards'
import MyMangasBtns from '../../components/MyMangasBtns/MyMangasBtns'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authorAction from "../../store/Profile/actions";
import { Link as Anchor } from 'react-router-dom'

const { read_author } = authorAction;

export default function MyMangas() {
  const dispatch = useDispatch();
  let token = localStorage.getItem('token')

  let mangas = useSelector(store => store.myMangas.myMangas)
  let name = ""
  if (mangas[0]?.author_id.name || mangas[0]?.author_id.last_name) {
    name = mangas[0]?.author_id.name
    if (mangas[0]?.author_id.last_name) {
      name += " " + mangas[0]?.author_id?.last_name
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
        author?.active ? <div className='mangas'>
          <div className='myMangas-title'>
            {name ? <h2>{name}</h2> : ""}
          </div>

          <section className='mangas-displayed'>
            <MangasType />
            <MyMangasCards />
            <MyMangasBtns />
          </section>
        </div> : <div className='noLogged'>
          <Anchor to='/auth'>Please Register/Login</Anchor>
          <p>Or</p>
          <Anchor to='/author-form'>Become an Author</Anchor>
        </div>
      }
    </>
  )
}
