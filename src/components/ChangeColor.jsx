import { useState } from "react"
import { useDispatch } from "react-redux";
import { ChangeColor } from "../features/Theme";

export default function ChangeColors(){

    const dispatch = useDispatch();

    const [color, setColor] = useState("");

    return(
        <>
           <input 
             type="text" 
             name="change" 
             onChange={(event)=>{setColor(event.target.value)}} 
           />

           <button 
             type="button" 
             onClick={()=>{dispatch(ChangeColor(color))}}
           >
             Change Color
           </button>
        </>
    )
}