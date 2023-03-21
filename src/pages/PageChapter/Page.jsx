import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./page.css";
import comment from '../../images/icon_comment 1.png'
import flecha from '../../images/flecha-correcta.png'
import flecha_izquierda from '../../images/flecha-izquierda.png'
import Comment from "../../components/Comment/Comment";
import { useDispatch, useSelector } from 'react-redux'
import modalActions from '../../store/RenderCommentsModal/actions'

export default function Page() {
  const [chapter, setChapters] = useState({});
  const [next, setNext] = useState('');
  const { id, page } = useParams();
  const url = 'http://localhost:8080/api/chapters/';
  const navigate = useNavigate();

  let dispatch = useDispatch()
  let modalState = useSelector(store => store.commentsModal.state)
  const { renderModal } = modalActions

  let [index, setIndex] = useState(Number(page));
  
  let comments = useSelector(store => store.comments.comments)
  useEffect(() => {
    axios
      .get(`${url}${id}`)
      .then((response) => {
        setChapters(response.data.chapter);
        setNext(response.data.next)
      })

      .catch((error) => console.error(error));
  }, [comments]);


  let handlePrev = () => {
    setIndex(index - 1);
    navigate(`/chapters/${id}/${index - 1}`);
    if (index <= 0) {
      navigate(`/mangas/${chapter.manga_id}/1`);
    }
  };

  let handleNext = () => {
    setIndex(index + 1);
    navigate(`/chapters/${id}/${index + 1}`);
    if (index >= chapter.pages.length - 1) {
      navigate(`/chapters/${next}/${0}`);
    }
  };

  function handleRender() {
    dispatch(renderModal({ state: true }))
  }

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
            <img className="comment" src={comment} alt="" onClick={handleRender} /> {/* ESTA ABRE EL MODAL*/}
          </p>
          <p>{comments.length}</p>
          {modalState ? <Comment /> : ""}
        </div>
      </div>
    </div>
  );
}
