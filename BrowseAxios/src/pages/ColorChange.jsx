import { useState } from "react";


const ColorChange=()=>{
  const [color,setColor]= useState("red");
  
  return(
    <>
    <h1 style={{color:color}}>welcome to cybrom App:{color}</h1>
    <button onClick={()=>{setColor("green")}}>click here</button>
    <button onClick={()=>{setColor("yellow")}}>click here</button>
    <button onClick={()=>{setColor("blue")}}>click here</button>
    <button onClick={()=>{setColor("violet")}}>click here</button>

    </>
  )
}
export default ColorChange;