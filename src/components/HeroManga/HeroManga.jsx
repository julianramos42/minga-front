import React from 'react'
import H2 from '../H2/H2'
import './heroManga.css'
import { Link as Anchor } from 'react-router-dom'

export default function HeroManga() {
  return (
    <div className='background-hero'>
        <section className='explore-section'>
            <H2 text='Live the emotion of the manga' />
            <h3>Find the perfect manga for you</h3>
            <span>#MingaForever 🔥</span>
            <Anchor to='#' className='explore-btn'>Explore</Anchor>
        </section>
    </div>
  )
}
