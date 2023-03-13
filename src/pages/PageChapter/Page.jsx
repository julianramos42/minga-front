import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./page.css";
import comment from '../../images/icon_comment 1.png'
import flecha from '../../images/flecha-correcta.png'
import flecha_izquierda from '../../images/flecha-izquierda.png'

export default function Page() {
  const [chapter, setChapters] = useState({});
  const [next, setNext] = useState('');
  const { id, page } = useParams();
  const url = 'http://localhost:8080/api/chapters/' ;
  const navigate = useNavigate();
   let [index, setIndex] = useState(Number(page));

   useEffect(() => {
     axios
       .get(`${url}${id}`)
       .then((response) => {
         setChapters(response.data.chapter);
         setNext(response.data.next)
       })

       .catch((error) => console.error(error));
   }, []);


    let handlePrev = () => {
      setIndex(index - 1);
      navigate(`/chapter/${id}/${index - 1}`);
      if (index <= 0) {
        navigate(`/mangas/${chapter.manga_id}/`);
      }
    };

    let handleNext = () => {
      setIndex(index + 1);
      navigate(`/chapter/${id}/${index + 1}`);
      if (index >= chapter.pages.length - 1) {
        navigate(`/chapter/${next}/${0}`);
      }
    };


  return (
    <div className="mover">
      <div className="div-chapter2">
        <div className="chapter2">
          <p className="parrafo-chapter2"> Cap N° {chapter.order} - {chapter.title}  </p>
        </div>
      </div>
      <div className="contenedor-capitulos">
        <button className="boton-back" onClick={handlePrev}>
          <img className="flecha" src={flecha_izquierda} alt="" />
        </button>

        <div className="posi">
          <img className="mangaa" src={chapter?.pages?.[index]} alt="" />
        </div>

        <button className="boton-next" onClick={handleNext}>
          <img className="flecha" src={flecha} alt="" />
        </button>
      </div>
      <div className="div-chapter3">
        <div className="chapter3">
          <p className="parrafo-chapter3">
            <img className="comment" src={comment} alt="" /> 
          </p>
        </div>
      </div>
    </div>
  );
}
