import { useState } from "react";


const Counter=()=>{
  const [cnt,setCnt]= useState(0);
  
  return(
    <>
    <h1>welcome to cybrom App:{cnt}</h1>
    <button onClick={()=>{setCnt(cnt+1)}}>increment</button>
    <button onClick={()=>{setCnt(cnt-1)}}>Decrement</button>
    <button onClick={()=>{setCnt(0)}}>Reset</button>
    
    </>
  )
}
export default Counter;

