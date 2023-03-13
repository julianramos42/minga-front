import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./page.css";
import comment from '../../images/icon_comment 1.png'
import flecha from '../../images/flecha-correcta.png'
import flecha_izquierda from '../../images/flecha-izquierda.png'

export default function Page() {
  const [chapter, setChapter] = useState(null);
  const { id, page } = useParams();
  const navigate = useNavigate();
  const pageNumber = parseFloat(page);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/chapters/` + id)
      .then((response) => setChapter(response.data.Chapter))
      .catch((error) => console.error(error));
  }, [id]);

  const goNext = () => {
    if (pageNumber === chapter.pages.length) {
      navigate(`/chapter/${id}/${1}`);
    } else {
      navigate(`/chapter/${id}/${pageNumber + 1}`);
    }
  };
  const goBack = () => {
    if (pageNumber === 1) {
      navigate(`/chapter/${id}/${chapter.pages.length}`);
    } else {
      navigate(`/chapter/${id}/${pageNumber - 1}`);
    }
  };

  return (
    <div className="mover">
      <div className="div-chapter2">
        <div className="chapter2">
          <p className="parrafo-chapter2"> Cap N° Cap N° {chapter.order} - {chapter.title}   </p>
        </div>
      </div>
      <div className="contenedor-capitulos">
        <button className="boton-back" onClick={goBack}>
          <img className="flecha" src={flecha_izquierda} alt="" />
        </button>

        {chapter ? (
          <img className="posi" src={chapter.pages[page - 1]}></img>
        ) : (
          "no existe el capitulo"
        )}

        <button className="boton-next" onClick={goNext}>
          <img className="flecha" src={flecha} alt="" />
        </button>
      </div>
      <div className="div-chapter3">
        <div className="chapter3">
          <p className="parrafo-chapter3">
            {" "}
            <img className="comment" src={comment} alt="" /> numero del capítulo
          </p>
        </div>
      </div>
    </div>
  );
}
