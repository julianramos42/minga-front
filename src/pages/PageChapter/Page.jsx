import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Page() {
    const [chapter, setChapter] = useState(null);
    const { id, page } = useParams();
    const navigate = useNavigate()
    const pageNumber = parseFloat(page)
    

    useEffect(() => {
        axios
          .get(`http://localhost:8080/api/chapters/${id}`)
          .then((response) => setChapter(response.data.Chapter))
          .catch((error) => console.error(error));
    },[id]);


    const goNext = () => {
        if(pageNumber === chapter.pages.length){
            navigate(`/chapter/${id}/${1}`);
        }else{
          navigate(`/chapter/${id}/${pageNumber + 1}`);
        }

    }
    const goBack = () => {
      if (pageNumber === 1) {
        navigate(`/chapter/${id}/${chapter.pages.length}`);
      } else {
        navigate(`/chapter/${id}/${pageNumber - 1}`);
      }
    };

  return (
    <div>
      <div className="div-chapter2">
        <div className="chapter2">
          <p className="parrafo-chapter2"> n° de cap - nombre del capítulo </p>
        </div>
      </div>
      <button onClick={goBack}>Back</button>
      {chapter ? (
        <img src={chapter.pages[page - 1]}></img>
      ) : (
        "no existe el capitulo"
      )}
      <button onClick={goNext}>Next</button>
    </div>
  );
}


