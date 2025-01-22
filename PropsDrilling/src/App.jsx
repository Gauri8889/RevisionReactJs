import React, { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{
  const [user,setName]=useState("Gauri dahake")
  console.log(user);
  
  return(
    <>
    <h1>welcome ............</h1>
    <h1>hello cybrom{user}</h1>
    
    <Comp1 user={user}/>
    </>
  )
}
export default App;