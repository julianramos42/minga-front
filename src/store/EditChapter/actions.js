import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_one_chapter = createAsyncThunk(
    'read_one_chapter',
    async ({ manga_id }) => {
        try {
            let response = await axios.get("http://localhost:8080/api/chapters/all/" + manga_id)
            return { chapters: response.data.chapters }
        } catch (error) {
            return { chapters: [] }
        }
    }
)
const delete_one_chapter = createAsyncThunk(
    'delete_one_chapter',
    async ({ _id , headers }) => {
        console.log(_id)
        try {
            let response = await axios.delete("http://localhost:8080/api/chapters/" + _id, headers)
            console.log(response)
            return { _id : _id }
        } catch (error) {
            console.log(error)
            return { chapters: [] }
        }
    }
)

const actions = { read_one_chapter, delete_one_chapter }
export default actions 