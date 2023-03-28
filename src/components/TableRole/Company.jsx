import React, { useState } from 'react'
import iconPanel from '../../images/Union.png'
import { useDispatch } from 'react-redux';
import './tablerole.css'
import action from '../../store/PanelAdmin/actions'
import { Toaster } from 'react-hot-toast'

const { captureState, update_company_active } = action;

export default function CompanyTable({ company }) {
 

    const [active, setActive] = useState(company.active);
    const dispatch = useDispatch();

    function IsActive(e) {
        dispatch(captureState({ buttonState: false }))
        dispatch(update_company_active({ _id: company._id, active: true }))
    }

    function NotActive(e) {
        dispatch(captureState({ buttonState: true }))
        dispatch(update_company_active({ _id: company._id, active: false }))
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
                        { active ? <button  disabled type='button' className={active ? 'boton-option boton-entities' : 'boton-option'} onClick={IsActive} ></button> : <button  type='button' className={active ? 'boton-option boton-entities' : 'boton-option'} onClick={IsActive} ></button> }
                        { active ? <button  type='button' className={!active ? 'boton-option boton-entities' : 'boton-option'} onClick={NotActive}></button> : <button  disabled type='button' className={!active ? 'boton-option boton-entities' : 'boton-option'} onClick={NotActive}></button> }
                    </div>
                </tr>
                <Toaster />
            </tbody>
        </>
    )
}
