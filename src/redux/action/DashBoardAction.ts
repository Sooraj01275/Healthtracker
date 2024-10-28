import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchCovidData=createAsyncThunk(
    'fetchCovidData/dashboardAction',
    async(props,thunk)=>{
        try{
            const response = await api.fetchGet('/stats/latest',{})
            return response.data.data
        }catch(error){
            return alert('something went wrong.')
        }
    }
)