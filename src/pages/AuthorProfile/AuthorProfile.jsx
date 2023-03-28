import React from "react";
import './authorProfile.css';
import EditProfile from '../../components/EditProfile/EditProfile';
import Profile from '../../components/Profile/Profile';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import authorAction from "../../store/Profile/actions";
import { Link as Anchor } from "react-router-dom";

const { read_author } = authorAction;

export default function Authorprofile() {
  const dispatch = useDispatch();
  let token = localStorage.getItem('token')

  let author = useSelector((store) => store.author.author);
  useEffect(() => {
    if (token) {
      dispatch(read_author());
    }
  }, []);

  return (
    <>
      {
        author?.active ? <div id="contenedor">
          <div id="profileBackground">
            <h1>Author</h1>
          </div>
          <div id="sectionProfile">
            <EditProfile />
            <Profile />
          </div>
        </div> : <div className='noLogged'>
          <Anchor to='/auth'>Please Register/Login</Anchor>
          <p>Or</p>
          <Anchor to='/author-form'>Become an Author</Anchor>
        </div>
      }
    </>
  );
}
