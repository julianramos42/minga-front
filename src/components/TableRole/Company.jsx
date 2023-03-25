import React, { useState } from 'react'
import iconPanel from '../../images/Union.png'
import { useDispatch } from 'react-redux';
import './tablerole.css'
import action from '../../store/PanelAdmin/actions'


const { captureState } = action;
export default function CompanyTable({company}) {
    const [active, setActive] = useState(true);
    const dispatch = useDispatch();

    function IsActive() {
        setActive(true)
        dispatch(captureState({ buttonState: false }))
    }
    function NotActive() {
        setActive(false)
        dispatch(captureState({ buttonState: true }))
    }

    return (
        <>
            <tbody className='body-table'>

                <tr >
                    <td className="iconPanel"><img src={iconPanel} /></td>
                    <td className="colum1">{company.name}</td>
                    <td className="colum2">{company.website}</td>
                    <td className="colum3"><img className='photo-perfil-author' src={company.logo} alt={company.name} /></td>
                    <div className='panel-active'>
                        <input className={active ? 'boton-option boton-entities' : 'boton-option'} onClick={IsActive} ></input>
                        <input className={!active ? 'boton-option boton-entities' : 'boton-option'} onClick={NotActive}></input>
                    </div>
                </tr>
            </tbody>
        </>
    )
}
