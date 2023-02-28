import React from 'react'
import Header from '../../components/Header/Header'
import HeroInfo from '../../components/HeroInfo/HeroInfo'
import HeroManga from '../../components/HeroManga/HeroManga'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <HeroInfo />
      <HeroManga />
    </div>
  )
}
