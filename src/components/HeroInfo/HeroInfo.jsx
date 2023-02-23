import React from 'react'
import './heroInfo.css'
import Image from '../Image/Image'

export default function HeroInfo() {
  return (
    <div className='hero-info-container'>
        <div className='hero-info'>
            <Image className='character' src='./images/character.png'/>
            <Image className='manga' src='./images/manga.png'/>
            <section className='manga-info'>
                <h2>Trigun Stampede</h2>
                <span className='manga-title'>Manga</span>
                <p>TRIGUN is a popular action manga by Yasuhiro Nightow that follows the story of Vash Stampede, a legendary gunfighter and pacifist with a huge bounty on his head.</p>
            </section>
        </div>
    </div>
  )
}
