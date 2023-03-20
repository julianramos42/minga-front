import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_favouritesMangas = createAsyncThunk(
    'read_favouritesMangas',
    async ({ page, categories, order, headers }) => {
        try{
            let response = await axios.get("http://localhost:8080/api/reactions?name=love&page="+page+"&category="+categories+"&order="+order,headers)
            return { favouritesMangas: response.data.message }
        }catch(error){
            return { favouritesMangas: '' }
        }
    }
) 

const actions = { read_favouritesMangas }
export default actions