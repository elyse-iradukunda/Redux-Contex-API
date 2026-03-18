import { useSelector } from "react-redux"
export default function Profile(){


     const user = useSelector(()=>{
        
     })

    return (

        <>
         <h1>Profile</h1>
          <p>Name:</p>
          <p>Age:</p>
          <p>Email:</p>
        </>
    )
}