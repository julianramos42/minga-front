import { createReducer } from "@reduxjs/toolkit";
import actions from './actions'

const { read_one_chapter, delete_one_chapter } = actions

const initialState = {
    chapters: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_one_chapter.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapters: action.payload.chapters
                }
                return newState
            }
        )
        .addCase(
            delete_one_chapter.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapters: state.chapters.filter(chapter => chapter._id !== action.payload._id)
                }
                return newState
            }
        )
)

export default reducer