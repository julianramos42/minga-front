import React from 'react'
import './heroInfo.css'
import H2 from '../H2/H2'
import Image from '../Image/Image'
import character from '../../images/character.png'
import manga from '../../images/manga.png'

export default function HeroInfo() {
  return (
    <div className='hero-info-container'>
        <div className='hero-info'>
            <Image className='character' src={character} alt='character'/>
            <Image className='manga' src={manga} alt='manga'/>
            <section className='manga-info'>
                <H2 text='Trigun Stampede' />
                <span className='manga-title'>Manga</span>
                <p>TRIGUN is a popular action manga by Yasuhiro Nightow that follows the story of Vash Stampede, a legendary gunfighter and pacifist with a huge bounty on his head.</p>
            </section>
        </div>
    </div>
  )
}
