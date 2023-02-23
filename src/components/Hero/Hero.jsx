import React from 'react'
import Header from '../Header/Header'
import HeroInfo from '../HeroInfo/HeroInfo'
import HeroManga from '../HeroManga/HeroManga'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <Header />
      <HeroInfo />
      <HeroManga />
    </div>
  )
}
