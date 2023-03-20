import React, { useEffect, useState } from 'react'
import './reaction.css'
import IconoManga from '../../images/icono-manga.png'
import IconoMang from '../../images/iconomanga-.png'
import IconoEmoji from '../../images/mangacoment.png'
import IconoCorazon from '../../images/iconocorazon.png'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import actions from '../../store/Reactions/actions.js'

export default function Reaction() {
    let mangaId = useParams().id
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    let like = useRef()
    let dislike = useRef()
    let surprise = useRef()
    let love = useRef()

    let [userReactions, setUserReactions] = useState([])
    let [reload,setReload] = useState(false)

    const {captureReactions} = actions
    let dispatch = useDispatch()
    useEffect( () => { // TRAE LAS REACCIONES DEL MANGA
        setTimeout( () => {
            dispatch(captureReactions({mangaId,headers}))
        },150)
    },[reload])

    let mangaReactions = useSelector(store => store.reactions.reactions)

    useEffect(() => { // TRAE LAS REACCIONES DEL USUARIO AL MANGA
        let url = "http://localhost:8080/api/reactions?me=1&manga_id=" + mangaId
        axios.get(url,headers).then(res => setUserReactions(res.data.message))
    }, [])

    useEffect(() => { //si tenes reacciones te las selecciona por defecto
        if (like, dislike, surprise, love) {
            userReactions.forEach(reaction => {
                if (reaction.name === 'like') {
                    like.current.classList.add('reacted')
                }
                if (reaction.name === 'dislike') {
                    dislike.current.classList.add('reacted')
                }
                if (reaction.name === 'surprise') {
                    surprise.current.classList.add('reacted')
                }
                if (reaction.name === 'love') {
                    love.current.classList.add('reacted')
                }
            })
        }
    }, [userReactions])

    function handleLike() {
        if(dislike.current.className.includes('reacted')){
            dislike.current.classList.toggle('reacted')
        }
        like.current.classList.toggle('reacted')
        let url = 'http://localhost:8080/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "like"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }
    function handleDislike() {
        if(like.current.className.includes('reacted')){
            like.current.classList.toggle('reacted')
        }
        dislike.current.classList.toggle('reacted')
        let url = 'http://localhost:8080/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "dislike"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }
    function handleSurprise() {
        if(love.current.className.includes('reacted')){
            love.current.classList.toggle('reacted')
        }
        surprise.current.classList.toggle('reacted')
        let url = 'http://localhost:8080/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "surprise"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }
    function handleLove() {
        if(surprise.current.className.includes('reacted')){
            surprise.current.classList.toggle('reacted')
        }
        love.current.classList.toggle('reacted')
        let url = 'http://localhost:8080/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "love"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }

    return (
        <>
            {
                mangaReactions ? <section className='section3'>
                    <div className='emojis-containers'>
                        <img className='emojis' src={IconoManga} onClick={handleLike} ref={like} alt="emoji1" />
                        <p>{mangaReactions.likes}</p>
                    </div>
                    <div className='emojis-containers'>
                        <img className='emojis' src={IconoMang} onClick={handleDislike} ref={dislike} alt="emoji2" />
                        <p>{mangaReactions.dislike}</p>
                    </div>
                    <div className='emojis-containers'>
                        <img className='emojis' src={IconoEmoji} onClick={handleSurprise} ref={surprise} alt="emoji3" />
                        <p>{mangaReactions.surprise}</p>
                    </div>
                    <div className='emojis-containers'>
                        <img className='emojis' src={IconoCorazon} onClick={handleLove} ref={love} alt="emoji4" />
                        <p>{mangaReactions.love}</p>
                    </div>
                </section> : ""
            }
            <section className='section4'>
                <div className='rectangle-manga'>
                    <div className='rectangle-text'>
                        <p className='text1'>4.5/5</p>
                        <p className='text2'>Rating</p>
                    </div>
                    <p className='text3'> | </p>
                    <div className='rectangle-text'>
                        <p className='text1'>265</p>
                        <p className='text2'>Chapters</p>
                    </div>
                    <p className='text3'> | </p>
                    <div className='rectangle-text'>
                        <p className='text1'>Eng</p>
                        <p className='text2'>Lenguaje</p>
                    </div>
                </div>
            </section>
        </>
    )
}
