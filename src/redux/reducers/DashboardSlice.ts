import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CovidDataResponse, UnofficialSummary } from "../../models/covidAPIResponse.model";
import { fetchCovidData } from "../action/DashBoardAction";

interface DashboardSliceProps {
    covidData: CovidDataResponse | null,
    loading: boolean;
    unofficialSummary: UnofficialSummary | null;
    locationList:Array<string>
}

const initialState: DashboardSliceProps = {
    covidData: null,
    loading: false,
    unofficialSummary: null,
    locationList : []
}

const DashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchCovidData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchCovidData.fulfilled,(state,{payload}:PayloadAction<CovidDataResponse>)=>{
            state.covidData = payload
            state.unofficialSummary = payload["unofficial-summary"][0]
            state.locationList = payload.regional.map(data=>data.loc)
            state.loading = false
        })
        builder.addCase(fetchCovidData.rejected,(state)=>{
            state.loading = false
        })
    },
})

export const DashboardAction = DashboardSlice.actions
export default DashboardSlice.reducer