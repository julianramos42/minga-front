import React from 'react'
import './newroleauthor.css'
import Imgprofile from '../../images/profile-newrole.png'
import Imgprofile2 from '../../images/profile-newrole2.png'
import Imgprofile3 from '../../images/profile-newrole3.png'
import { Link as Anchor } from 'react-router-dom'

export default function NewRoleAuthor() {
    return (
        <>
            <Anchor to={'/author-form'} className='text-author'>
                <div className='join-author'>
                    <div className='profiles'>
                        <img src={Imgprofile} alt={Imgprofile} />
                        <img src={Imgprofile2} alt={Imgprofile2} />
                        <img src={Imgprofile3} alt={Imgprofile3} />
                    </div>

                    <div className='selec-author'>
                        <h3 >Join as an Author!</h3>
                        <p>I'm a reader writting a manga</p>
                    </div>
                </div>
            </Anchor>
        </>
    )
}
