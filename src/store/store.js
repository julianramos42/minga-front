import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reducer'
import textReducer from './SearchBar/reducer'
import mangasReducer from './Mangas/reducer'
import categoriesReducer from './Categories/reducer'
import sortReducer from './Sort/reducer'

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        text: textReducer,
        mangas: mangasReducer,
        categories: categoriesReducer,
        order: sortReducer
    }
})