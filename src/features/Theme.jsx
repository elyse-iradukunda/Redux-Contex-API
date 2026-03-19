import { createSlice } from "@reduxjs/toolkit";
const valueOfInitialState ="";

 export const themeSlice = createSlice({

    name:"theme"
    ,
    initialState: {value:valueOfInitialState},
    reducers:{
        // login:(state,action)=>{
        //    state.value = action.payload;
        // },

        // logout:(state)=>{
        //     state.value = valueOfInitialState;
        // }

        ChangeColor:(state,action)=>{
             state.value = action.payload;
        }
    }
 })

 export const {ChangeColor} = themeSlice.actions;

 export default themeSlice.reducer