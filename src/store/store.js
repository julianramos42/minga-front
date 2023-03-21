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
import renderCommentsModal from './RenderCommentsModal/reducer'
import getComents from './Comments/reducer'
import myMangasReducer from './MyMangas/reducer'
import modalReducer from './RenderEditModal/reducer'
import modalDeleteReducer from './RenderDeleteModal/reducer'
import myMangasReducer from './MyMangas/reducer'
import modalReducer from './RenderEditModal/reducer'
import modalDeleteReducer from './RenderDeleteModal/reducer'
import reactionsReducer from './Reactions/reducer'
import favouritesMangasReducer from './FavouritesMangas/reducer'

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
        commentsModal: renderCommentsModal,
        comments: getComents,
        myMangas: myMangasReducer,
        modalState: modalReducer,
        modalDeleteState: modalDeleteReducer,
        myMangas: myMangasReducer,
        modalState: modalReducer,
        modalDeleteState: modalDeleteReducer,
        reactions: reactionsReducer,
        favouritesMangas: favouritesMangasReducer
    }
})