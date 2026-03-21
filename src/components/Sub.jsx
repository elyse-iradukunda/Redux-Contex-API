 import { useDispatch } from "react-redux";
 import { useState } from "react"
 import { isSubscribed } from "../features/Subscribe";
 export default function Sub(){

    const dispatch= useDispatch();


    return (
        <>
           <h1>
             {}
           </h1>

           <button type="button" onClick={()=> dispatch(isSubscribed())}>Subscribe</button>
        </>

    )
 }