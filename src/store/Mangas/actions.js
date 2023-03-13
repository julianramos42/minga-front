import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_mangas = createAsyncThunk(
    'read_mangas',
    async ({ page, inputText, categories, order, headers }) => {
        try{
            let response = await axios.get("http://localhost:8080/api/mangas/?page="+page+"&title="+inputText.trim()+"&category="+categories+"&order="+order,headers)
            return { mangas: response.data.mangas }
        }catch(error){
            return { mangas: '' }
        }
    }
) 

const actions = { read_mangas }
export default actions