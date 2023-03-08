import React from 'react'
import './mangasType.css'
import H2 from '../H2/H2'
import Image from '../Image/Image'
import sort from '../../images/sort.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function MangasType() {
    const [categories, setCategories] = useState(false)

    let categoriesUrl = "http://localhost:8080/api/categories"

    useEffect(() => {
        axios.get(categoriesUrl).then(e => setCategories(e.data.categories))
    }, [])

    return (
        <section className='mangas-type'>
            {
                categories ? categories.map(category => <div className={'category-' + category.name} key={category._id}><H2 text={category.name} /></div>) : ""
            }
            <Image src={sort} />
            <div></div>
        </section>
    )
}
