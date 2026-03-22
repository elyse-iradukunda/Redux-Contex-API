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

        logout:(state)=>{
            state.value = valueOfInitialState;
        }
    }
 })

 console.log("make some changes");

 export const {login,logout} = userSlice.actions;

 export default userSlice.reducer