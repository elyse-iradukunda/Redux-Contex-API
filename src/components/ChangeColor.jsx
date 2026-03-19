import { useState } from "react"
import { useDispatch } from "react-redux";
import { ChangeColor } from "../features/Theme";

export default function ChangeColor(){

    const Dispatch = useDispatch();

      const [color,setColor]= useState("");
    return(
        <>
           <input type="text" name="change" onChange={(event)=>{setColor(event.target.value)}} />
           <button type="button" onClick={()=>{Dispatch(ChangeColor())}}>Change Color</button>
        </>
    )
}