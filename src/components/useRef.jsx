import { useRef } from "react";

export default function TestRef(){
  
    const exampleRef = useRef(0);
    const handleCounter = ()=>{
         
        return exampleRef.current++;

     }

    return(

        <button className="background: green; text:white;" type="button" onClick={handleCounter}>Click here</button>
    )


}