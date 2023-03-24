import React from 'react'
import './adminpanel.css'
import TableRole from '../../components/TableRole/TableRole'


export default function AdminPanel() {
    return (
        <>
            <div className='contenedor-adminpanel'>
                <div id='profileBackground'>
                    <h1>Panel</h1>
                </div>
                <div className='sectionAdminPanel'>
                    <div>
                        <h1 className='title-adminPanel'>Entities</h1>
                    </div>
                    <div>
                        <TableRole />
                    </div>
                </div>
            </div>
        </>

    )
}