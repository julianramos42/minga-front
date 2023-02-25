import React from 'react'
import './navHeader.css'
import Image from '../Image/Image'
import H2 from '../H2/H2'
import P from '../P/P'
import profilePic from '../../images/navBarProfile.png'
import closeBtn from '../../images/closeBtn.svg'

export default function NavHeader({handleRender}) {
    return (
        <div className='navHeader'>
            <div className='picAndText'>
                <Image className='profilePic' src={profilePic} alt='profile-picture' />
                <div className='nameAndMail'>
                    <H2 text='Lucas Ezequiel Silva' />
                    <P text='lucasezequielsilva@gmail.com' />
                </div>
            </div>
            <div onClick={handleRender}>
                <Image src={closeBtn} />
            </div>
        </div>
    )
}
