import { useDispatch } from "react-redux"
import { login } from "../features/Users";
export default function Login(){

    const Dispatch= useDispatch();

    return (

        <button type="button" onClick={()=>{Dispatch(login())}}>Login</button>
    )
}