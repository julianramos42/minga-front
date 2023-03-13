import { createReducer } from "@reduxjs/toolkit";
import chapterActions from './actions'

const { read_chapters } = chapterActions

const initialState = {
    chapters: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_chapters.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapters: action.payload.chapters
                }
                return newState
            }
        )
)

export default reducer