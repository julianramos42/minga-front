import React from 'react'
import FormCompany from '../../components/CompanyForm/FormCompany'
import './companyform.css'
import { Link as Anchor } from 'react-router-dom'

export default function CompanyForm() {
    let token = localStorage.getItem('token')
    return (
        <>
            {
                token ? <FormCompany/> : <div className='noLogged'><Anchor to='/auth'>Please Register or Login</Anchor></div>
            }
        </>
    )
}
