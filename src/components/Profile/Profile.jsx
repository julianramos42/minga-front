import React from "react";
import "./profile.css";
import perfil from "../../images/default-profile.png";
import location from '../../images/location-author.png'
import date from '../../images/date-author.png'

export default function Profile() {
  return (
    <div id="profile">
      <img id="profile-img" src={perfil} alt="profile" />
      <h2>romy</h2>
      <div id="data-author">
        <p>
          <img id="icon1" src={location} alt="location" />
          ballester, bs as
        </p>
        <p>
          <img id="icon1" src={date} alt="date" />
          12/03/25
        </p>
      </div>
    </div>
  );
}
