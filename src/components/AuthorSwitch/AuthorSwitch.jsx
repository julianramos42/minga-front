import React from 'react'
import './authorSwitch.css'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import checkActions from '../../store/Switch/actions.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function AuthorSwitch() {
    let [mangaOrder,setMangaOrder] = useState("")
    const {switchActions} = checkActions
    let dispatch = useDispatch()
    let checked = useRef()
    let checkOrder = useSelector(store => store.check.checked)

    useEffect( () => {
        checked.current.checked = !checkOrder
    },[])

    function handleCheck(){
        if(checked.current.checked){
            setMangaOrder(false)
        }else{
            setMangaOrder(true)
        }
    }

    useEffect( () => {
        dispatch(switchActions({checked: mangaOrder}))
    },[checked.current?.checked, mangaOrder])

    return (
        <div className='switch'>
            <p>new</p>
            <div className="switch-button">
                <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" ref={checked} onChange={handleCheck} />
                <label htmlFor='switch-label' className="switch-button__label"></label>
            </div>
            <p>old</p>
        </div>
    )
}
