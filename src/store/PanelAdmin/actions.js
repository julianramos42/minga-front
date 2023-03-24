import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureState = createAction(
    'captureState',
    ({ buttonState }) => {
        return {
            payload: {
                checked: buttonState,
            }
        }
    }
)

let read_all_authors = createAsyncThunk(
    'read_all_authors',
    async () => {
        try {
            let response = await axios.get('http://localhost:8080/api/authors')
            console.log(response)
            return { authors: response.data.author }
        } catch (error) {
            return { authors: [] }
        }
    }
)
let read_all_company = createAsyncThunk(
    'read_all_company',
    async () => {
        try {
            let response = await axios.get('http://localhost:8080/api/companies')
            return {
                companies: response.data.company
            }
        } catch (error) {
            return { companies: [] }
        }
    }
)

const actions = { captureState, read_all_authors, read_all_company }
export default actions