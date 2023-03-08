import React from 'react'
import './mangas.css'
import H2 from '../../components/H2/H2'
import Input from '../../components/Input/Input'
import Image from '../../components/Image/Image'
import loupe from '../../images/Search.svg'
import axios from 'axios'
import { useState, useEffect } from 'react'
import sort from '../../images/sort.svg'
import prueba from '../../images/asd123.png'

export default function Comics() {
  const [categories, setCategories] = useState(false)
  let categoriesUrl = "http://localhost:8080/api/categories"
  useEffect(() => {
    axios.get(categoriesUrl).then(e => setCategories(e.data.categories))
  }, [])

  const [mangas, setMangas] = useState(false)
  let mangasUrl = "http://localhost:8080/api/mangas"
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }
  useEffect(() => {
    axios.get(mangasUrl, headers).then(e => setMangas(e.data.mangas))
  }, [])

  return (
    <div className='mangas'>

      <section className='title'>
        <H2 text='Mangas' />
        <div className='search-bar'>
          <Image src={loupe} alt='loupe' />
          <Input type='text' name='search-bar' placeholder='Find your manga here' />
        </div>
      </section>

      <section className='mangas-displayed'>
        <H2 text='Explore' />

        <div className='mangas-categories'>
          <div className='category1'><H2 text='Adventures' /></div>
          <div className='category2'><H2 text='Nostalgic' /></div>
          <div className='category3'><H2 text='Popular' /></div>
        </div>

        <section className='mangas-type'>
          {
            categories ? categories.map(category => <div className={'category-' + category.name} key={category._id}><H2 text={category.name} /></div>) : ""
          }
          <Image src={sort} />
          <div></div>
        </section>

        <div className='mangas-cards'>
          {
            mangas ? mangas.map(manga => {
              let card = <section className='card'>
                <div className='card-color'></div>
                <div className='card-text'>
                  <H2 text={manga.title} />
                  <span>{manga.category_id.name}</span>
                </div>
                <div className='card-img'>
                  <Image src={manga.cover_photo} alt='manga-image' />
                </div>
              </section>
              return card
            }) : ""
          }
        </div>

      </section>

    </div>
  )
}