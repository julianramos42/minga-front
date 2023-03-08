import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_events = createAsyncThunk(
    'read_events',
    async ({ inputText, categories, headers }) => {
        try{
            let response = await axios.get("http://localhost:8080/api/mangas?title="+inputText.trim()+"&category="+categories,headers)
            return { events: response.data.mangas }
        }catch(error){
            return { events: '' }
        }
    }
) 

const actions = { read_events }
export default actions