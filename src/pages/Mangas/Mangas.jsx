import React from 'react'
import './mangas.css'
import H2 from '../../components/H2/H2'
import MangasTitle from '../../components/MangasTitle/MangasTitle'
import MangasCategories from '../../components/MangasCategories/MangasCategories'
import MangasType from '../../components/MangasType/MangasType'
import MangasCards from '../../components/MangasCards/MangasCards'
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Comics() {
  let page = Number(useParams().page)
  let mangas = useSelector(store => store.events.events)
  
  function handlePrev(){
    if(page != 1){
      page -= 1
      window.location.pathname = "/mangas/"+page
    }
  }

  function handleNext(){
    page += 1
      window.location.pathname = "/mangas/"+page
  }

  return (
    <div className='mangas'>

      <MangasTitle />

      <section className='mangas-displayed'>
        <H2 text='Explore' />
        <MangasCategories />
        <MangasType />
        <MangasCards />
        <div className='page-btns'>
          { page == 1 ? "" : <Anchor className='prev' onClick={handlePrev}>Prev</Anchor> }
          { mangas.length ? <Anchor className='next' onClick={handleNext}>Next</Anchor> : "" }
        </div>
      </section>

    </div>
  )
}