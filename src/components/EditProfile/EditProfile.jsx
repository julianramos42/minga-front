import React from 'react'
import './editProfile.css'
import perfil from '../../images/default-profile.png'

export default function EditProfile() {
    return (
        <>
            <div id='editProfile'>
                <form id='formEdit'>

                    <input name="name" id="inputAuthorForm" type="text" placeholder="Name" required />
                    <input name="last_name" id="inputAuthorForm" type="text" placeholder="Last Name" required />
                    <input name="city_country" id="inputAuthorForm" type="text" placeholder="City, Country" required />
                    <input name="date" id="inputAuthorForm" type="date" required />
                    <input name="photo" id="inputAuthorForm" type="text" placeholder="URL Profile Image" required />
                    <div id='section-btn'>
                        <input id='btnsave' type="submit" value="Save" />
                        <input id='btndelete' type="submit" value="Delete Acount" />
                    </div>
                </form>
            </div>
        </>
    )
}