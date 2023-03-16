import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_myMangas = createAsyncThunk(
    'read_myMangas',
    async ({ page, inputText, categories, order, headers }) => {
        try{
            let response = await axios.get("http://localhost:8080/api/mangas/me?page="+page+"&title="+inputText.trim()+"&category="+categories+"&order="+order,headers)
            return { myMangas: response.data.mangas }
        }catch(error){
            return { myMangas: '' }
        }
    }
) 

const actions = { read_myMangas }
export default actions