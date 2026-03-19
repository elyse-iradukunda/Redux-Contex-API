import { useState } from "react"

export default function ChangeColor(){

      const [color,setColor]= useState("");
    return(
        <>
           <input type="text" name="change" onChange={(event)=>{setColor(event.target.value)}} />
           <button type="button">Change Color</button>
        </>
    )
}