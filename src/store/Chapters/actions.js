import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_chapters = createAsyncThunk(
    'read_chapters',
    async ({ manga_id, page, headers }) => {
        try {
            let response = await axios.get(`http://localhost:8080/api/chapters/?manga_id=${manga_id}&page=${page}`, headers)
            return { chapters: response.data.chapter }
        } catch (error) {
            return { chapters: '' }
        }
    }
)

const actions = { read_chapters }
export default actions