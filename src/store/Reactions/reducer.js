import { createReducer } from "@reduxjs/toolkit";
<<<<<<<< HEAD:src/store/MyMangas/reducer.js
import mangasActions from './actions'

const { read_myMangas } = mangasActions

const initialState = {
    myMangas: []
========
import actions from './actions'

const { captureReactions } = actions

const initialState = {
    reactions: {}
>>>>>>>> deb43ca0b5381554048815c8c57daadc77dba705:src/store/Reactions/reducer.js
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
<<<<<<<< HEAD:src/store/MyMangas/reducer.js
            read_myMangas.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    myMangas: action.payload.myMangas
========
            captureReactions.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    reactions: action.payload.reactions
>>>>>>>> deb43ca0b5381554048815c8c57daadc77dba705:src/store/Reactions/reducer.js
                }
                return newState
            }
        )
)

export default reducer