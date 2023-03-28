import React from 'react'
import './myReactions.css'
import MangasType from '../../components/MangasType/MangasType'
import FavouritesMangasCards from '../../components/FavouritesMangasCards/FavouritesMangasCards'
import FavouritesMangasBtns from '../../components/FavouritesMangasBtns/FavouritesMangasBtns'
import { Link as Anchor } from 'react-router-dom'

export default function MyReactions() {
  let token = localStorage.getItem('token')

  return (
    <>
      {
        token ? <div className='mangas'>
        <div className='favouritesMangas-title'>
            <h2>Favourites</h2>
        </div>

      <section className='mangas-displayed'>
        <MangasType />
        <FavouritesMangasCards />
        <FavouritesMangasBtns />
      </section>

    </div> : <div className='noLogged'><Anchor to='/auth'>Please Register or Login</Anchor></div>
      }
    </>
  )
}
