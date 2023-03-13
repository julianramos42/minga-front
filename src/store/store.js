import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './Alert/reducer'
import textReducer from './SearchBar/reducer'
import eventReducer from './Events/reducer'
import categoriesReducer from './Categories/reducer'
import sortReducer from './Sort/reducer'
import chaptersReducer from './Chapters/reducer'

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        text: textReducer,
        events: eventReducer,
        categories: categoriesReducer,
        order: sortReducer,
        chapters: chaptersReducer
    }
})