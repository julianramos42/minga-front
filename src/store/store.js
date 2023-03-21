import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reducer'
import textReducer from './SearchBar/reducer'
import chaptersReducer from './Chapters/reducer'
import captureState from './Captures/reducer'
import mangasReducer from './Mangas/reducer'
import categoriesReducer from './Categories/reducer'
import sortReducer from './Sort/reducer'
import mangasFromAuthorReducer from './MangasFromAuthor/reducer'
import checkReducer from './Switch/reducer'
<<<<<<< HEAD
import renderCommentsModal from './RenderCommentsModal/reducer'
import getComents from './Comments/reducer'
=======
import myMangasReducer from './MyMangas/reducer'
import modalReducer from './RenderEditModal/reducer'
import modalDeleteReducer from './RenderDeleteModal/reducer'
>>>>>>> 26acbbef522bea31b1d1bde81527c9daa6ff6fbb

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        text: textReducer,
        chapters: chaptersReducer,
        checked: captureState,
        mangas: mangasReducer,
        categories: categoriesReducer,
        order: sortReducer,
        mangas_from_author:  mangasFromAuthorReducer,
        check: checkReducer,
<<<<<<< HEAD
        commentsModal: renderCommentsModal,
        comments: getComents
=======
        myMangas: myMangasReducer,
        modalState: modalReducer,
        modalDeleteState: modalDeleteReducer
>>>>>>> 26acbbef522bea31b1d1bde81527c9daa6ff6fbb
    }
})