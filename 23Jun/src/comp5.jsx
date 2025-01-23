import { useContext } from "react";
import { nameContext } from "./App";

const Comp5=()=>{
    const {user}=useContext(nameContext)
    return(
      <>
      <h1>compnent -4</h1>
      <h1>hello khushi:{user}</h1>
      <button onClick={()=>{setUser("khushi dahake")}}>click here</button>
      </>
    )
  }
  export default Comp5;
  export {nameContext};