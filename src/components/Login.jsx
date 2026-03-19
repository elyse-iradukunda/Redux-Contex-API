import { useDispatch } from "react-redux"
import { login,logout } from "../features/Users";
export default function Login(){

    const Dispatch= useDispatch();

    return (
  <>
        <button type="button" onClick={()=>{Dispatch(login({name:"Pedro",age:20,Email:"pedro@gmail.com"}))}}>Login</button>
        <button type="button" onClick={()=>{Dispatch(logout())}}>Logout</button>

  </>      
    )
}