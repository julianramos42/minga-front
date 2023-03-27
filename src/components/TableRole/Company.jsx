import React, { useState } from 'react'
import iconPanel from '../../images/Union.png'
import { useDispatch } from 'react-redux';
import './tablerole.css'
import action from '../../store/PanelAdmin/actions'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'



const { captureState, update_company_active } = action;

export default function CompanyTable({ company }) {

    const [active, setActive] = useState(company.active);
    const dispatch = useDispatch();
    // let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    function IsActive() {
        dispatch(captureState({ buttonState: false }))
        dispatch(update_company_active({ _id: company._id, active: true }))
    
        try {
            
            toast.success('Company status changed')

        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                toast.error('You need to Login')
            } else {

                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }
            }
        }
    
    }

     function NotActive() {
        
        dispatch(captureState({ buttonState: true }))
        dispatch(update_company_active({ _id: company._id, active: false }))

        try {
            
            toast.success('Company status changed')

        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                toast.error('You need to Login')
            } else {

                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }
            }
        }
    }



    return (
        <>
            <tbody className='body-table'>

                <tr >
                    <td className="iconPanel"><img src={iconPanel} alt={iconPanel} /></td>
                    <td className="colum1">{company.name}</td>
                    <td className="colum2">{company.website}</td>
                    <td className="colum3"><img className='photo-perfil-author' src={company.logo} alt={company.name} /></td>
                    <div className={active ? 'panel-active' : 'panel-inactive'}>
                        <button className={active ? 'boton-option boton-entities' : 'boton-option'} onClick={IsActive} ></button>
                        <button className={!active ? 'boton-option boton-entities' : 'boton-option'} onClick={NotActive}></button>
                    </div>
                </tr>
                <Toaster/>
            </tbody>
        </>
    )
}
