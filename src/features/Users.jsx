import { createSlice } from "@reduxjs/toolkit";

 export const userSlice = createSlice({

    name:"users"
    ,
    initialState: {value:{name:"",age:0,Email:""}},
    reducers:{
        login:(state,action)=>{
           state.value = action.payload;
        }
    }
 })

 export default userSlice.reducer