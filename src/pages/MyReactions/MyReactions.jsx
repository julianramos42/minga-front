import React from 'react'
import './myReactions.css'
import MangasType from '../../components/MangasType/MangasType'
import FavouritesMangasCards from '../../components/FavouritesMangasCards/FavouritesMangasCards'
import FavouritesMangasBtns from '../../components/FavouritesMangasBtns/FavouritesMangasBtns'

export default function MyReactions() {

  return (
    <div className='mangas'>
        <div className='favouritesMangas-title'>
            <h2>Favourites</h2>
        </div>

      <section className='mangas-displayed'>
        <MangasType />
        <FavouritesMangasCards />
        <FavouritesMangasBtns />
      </section>

    </div>
  )
}
