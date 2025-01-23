import { useContext } from "react";
import { userContext } from "./MyContext";
const Cybrom=()=>{
  const {name,setName}=userContext(userContext);
    return(
      <>
      <h1>welcome to cybrom: {name}</h1>
      <button onClick={()=>{setName("Sanju")}}>Click here</button>
      </>
    )
  }
  export default Cybrom;
  
  