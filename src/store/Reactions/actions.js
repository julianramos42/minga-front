import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const captureReactions = createAsyncThunk(
    'captureReactions',
    async ({ mangaId,headers }) => {
        try{
            let response = await axios.get("http://localhost:8080/api/reactions/?manga_id="+mangaId,headers)
            return { reactions: response.data.message }
        }catch(error){
            return { reactions: {} }
        }
    }
) 

const actions = { captureReactions }
export default actions