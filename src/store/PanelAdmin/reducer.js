import { createReducer } from "@reduxjs/toolkit";
import actions from './actions'
const { captureState, read_all_authors, read_all_company } = actions

const initiateState = {
    checked: false,
    authors: "",
    companies: "",
}
const reducer = createReducer(
    initiateState,
    (builder) => builder
        .addCase(
            captureState,
            (state, action) => {
                let newState = {
                    ...state,
                    checked: action.payload.checked
                }
                return newState
            }
        )
        .addCase(
            read_all_authors.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    authors: action.payload.authors
                }
                return newState
            }
        )
        .addCase(
            read_all_company.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    companies: action.payload.companies
                }
                return newState
            }

        )
)

export default reducer