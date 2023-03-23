import React from 'react'
import './newrolecompany.css'
import Imgprofile from '../../images/profile-newrole.png'
import Imgprofile2 from '../../images/profile-newrole2.png'
import Imgprofile3 from '../../images/profile-newrole3.png'

export default function NewRoleCompany() {
    return (
        <>
            <div className='join-company'>
                <div className='profiles'>
                    <img src={Imgprofile} alt={Imgprofile} />
                    <img src={Imgprofile2} alt={Imgprofile2} />
                    <img src={Imgprofile3} alt={Imgprofile3} />
                </div>
                <div className='selec-company'>
                    <h3>Join as an Company!</h3>
                    <p>I'm a company and I want to publish my comics</p>
                </div>

            </div>
        </>
    )
}
