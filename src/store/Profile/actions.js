import axios from 'axios'
import { Dispatch } from 'redux'

export const loadAuthorData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:8000/authors/')
            const authorData = response.data
            dispatch({ type: 'LOAD_AUTHOR_DATA', payload: authorData })
        } catch (error) {
            console.error(error)
        }
    }
}

export const saveAuthorData = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.put('http://localhost:8000/authors/me', data)
            const updatedAuthorData = response.data
            dispatch({ type: 'SAVE_AUTHOR_DATA', payload: updatedAuthorData })
        } catch (error) {
            console.error(error)
        }
    }
}