import React from 'react'
import './myMangas.css'
import H2 from '../../components/H2/H2'
import MangasCategories from '../../components/MangasCategories/MangasCategories'
import MangasType from '../../components/MangasType/MangasType'
import MyMangasCards from '../../components/MyMangasCards/MyMangasCards'
import MyMangasBtns from '../../components/MyMangasBtns/MyMangasBtns'
import { useSelector } from 'react-redux'

export default function MyMangas() {
    let mangas = useSelector(store => store.myMangas.myMangas)
    let name = ""
    if(mangas[0]?.author_id.name || mangas[0]?.author_id.last_name){
        name = mangas[0]?.author_id.name
        if(mangas[0]?.author_id.last_name){
          name += " "+mangas[0]?.author_id?.last_name
        }
    }
  return (
    <div className='mangas'>
        <div className='myMangas-title'>
            { name ? <h2>{name}</h2> : "" }
        </div>

      <section className='mangas-displayed'>
        <MangasType />
        <MyMangasCards />
        <MyMangasBtns />
      </section>

    </div>
  )
}
