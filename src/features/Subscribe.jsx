import { createSlice } from "@reduxjs/toolkit";

 const subscribeSlice = createSlice({
    name:"subScribe",
    initialState:{
     isSubscribed: false
    },
    reducers: {
        subScribe: (state)=>{
            state.isSubscribed =!state.isSubscribed
        }
    }
 })

 export const {subScribe} = subscribeSlice.actions;
 export default subscribeSlice.reducer
