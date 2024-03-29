import React from 'react'
import './mangasType.css'
import Image from '../Image/Image'
import sort from '../../images/sort.svg'
import { useState, useEffect} from 'react'
import axios from 'axios'
import categoriesActions from '../../store/Categories/actions'
import sortActions from '../../store/Sort/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

let categoriesCheck = []
let order = 1

export default function MangasType() {
    const [categories, setCategories] = useState(false)
    const { captureCheck } = categoriesActions
    const dispatch = useDispatch()

    let checkedCategories = useSelector(store => store.categories.categories)

    let categoriesUrl = "http://localhost:8080/api/categories"

    useEffect(() => {
        axios.get(categoriesUrl).then(e => setCategories(e.data.categories))
    },[])
    
    function handleCheck(e){
        categories.forEach( category => {
            if(category.name === e.target.firstChild.textContent){
                if(!categoriesCheck.includes(category._id)){
                    categoriesCheck.push(category._id)
                }else{
                    categoriesCheck = categoriesCheck.filter( e => e !== category._id )
                }
                dispatch(captureCheck({categories: categoriesCheck.join()}))
            }
        } )
        e.target.classList.toggle('checked')
    }

    const { captureSort } = sortActions
    
    function handleSort(){
        if(order === 1){
            order = -1
        }else if(order == -1){
            order = 1
        }
        dispatch(captureSort({order}))
    }

    return (
        <div className='mangas-type'>
            {
                categories ? categories.map((category,i) => {
                    let checkclass = checkedCategories.includes(category._id) ? "checked" : ""
                    return <div className={'category-'+category.name+" "+checkclass } key={i} onClick={handleCheck} >{category.name}</div>
                }) : ""
            }
            <Image className='mangas-sort' src={sort} onClick={handleSort} />
        </div>
    )
}
