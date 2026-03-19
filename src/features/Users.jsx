import { createSlice } from "@reduxjs/toolkit";

const valueOfInitialState = {name:"",age:0,Email:""};

 export const userSlice = createSlice({

    name:"users"
    ,
    initialState: {value:valueOfInitialState},
    reducers:{
        login:(state,action)=>{
           state.value = action.payload;
        },

        logout:(state,action)=>{
            state.value = valueOfInitialState;
        }
    }
 })

 export const {login} = userSlice.actions;

 export default userSlice.reducer