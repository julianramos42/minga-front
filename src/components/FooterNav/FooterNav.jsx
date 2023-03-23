import React, { useEffect } from 'react'
import './footerNav.css'
import Image from '../Image/Image'
import logo from '../../images/Logo.png'
import facebook from '../../images/facebook-black.svg'
import twitter from '../../images/twitter-black.svg'
import vimeo from '../../images/vimeo-black.svg'
import youtube from '../../images/youtube-black.svg'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import heart from '../../images/heart.svg'
import { useState } from 'react'

export default function FooterNav() {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    let [renderModal, setRenderModal] = useState(false)

    const donations = [
        {
            id: 0,
            title: "Donate $1000",
            currency_id: "ARS",
            price: 1000,
            quantity: 1
        },
        {
            id: 1,
            title: "Donate $5000",
            currency_id: "ARS",
            price: 5000,
            quantity: 1
        },
        {
            id: 2,
            title: "Donate $10000",
            currency_id: "ARS",
            price: 10000,
            quantity: 1
        },
    ];

    function handleDonate(donate) {
        let donateData = donations.filter( donation => donation.id == donate.target.id)
        axios.post("http://localhost:8080/api/donate", donateData, headers)
            .then( res => window.location.href = res.data.response.body.init_point ); // te redirige al link de pago
    }

    function handleOpen() {
        setRenderModal(!renderModal)
    }

    function handleClose() {
        setRenderModal(!renderModal)
    }

    return (
        <>
            <nav>
                <div className='pages'>
                    <Anchor to='/'>Home</Anchor>
                    <Anchor to='/mangas/1'>Mangas</Anchor>
                </div>
                <div className='logo-container'>
                    <Image src={logo} alt='logo' />
                </div>
                <div className='social-container'>
                    <div className='social'>
                        <Anchor to='#'><Image src={facebook} alt='facebook logo' /></Anchor>
                        <Anchor to='#'><Image src={twitter} alt='twitter logo' /></Anchor>
                        <Anchor to='#'><Image src={vimeo} alt='vimeo logo' /></Anchor>
                        <Anchor to='#'><Image src={youtube} alt='youtube logo' /></Anchor>
                    </div>
                    <Anchor to='#' className='donate' onClick={handleOpen}>Donate<img src={heart} /></Anchor>
                </div>
            </nav>
            {renderModal ? <div className='donate-modal'>
                <div className='donate-card'>
                    <h2>Choose an option to donate</h2>
                    <div className='donateModal-btns'>
                        {
                            donations.map( (donation,i) => {
                                let card = <p id={donation.id} className='donateBtn' key={i} onClick={handleDonate}>{donation.title}</p>
                                return card
                            })
                        }
                    </div>
                    <p className='donateCancel' onClick={handleClose}>Cancel</p>
                </div>
            </div> : ""}
        </>
    )
}