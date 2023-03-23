import React from 'react'
import './mangas.css'
import H2 from '../../components/H2/H2'
import MangasTitle from '../../components/MangasTitle/MangasTitle'
import MangasCategories from '../../components/MangasCategories/MangasCategories'
import MangasType from '../../components/MangasType/MangasType'
import MangasCards from '../../components/MangasCards/MangasCards'
import MangasBtns from '../../components/MangasBtns/MangasBtns'
import { Link as Anchor } from 'react-router-dom'

export default function Comics() {
  let token = localStorage.getItem('token')

  return (
    <>
      {
        token ? <div className='mangas'>

          <MangasTitle />

          <section className='mangas-displayed'>
            <H2 text='Explore' />
            <MangasCategories />
            <MangasType />
            <MangasCards />
            <MangasBtns />
          </section>

        </div> : <div className='noLogged'><Anchor to='/auth'>Please Register or Login</Anchor></div>
      }
    </>
  )
}