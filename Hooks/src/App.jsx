import {  useState,useEffect } from "react";


const App=()=>{
  const [cnt,setCnt]= useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCnt(cnt+1)
    },1000);
  },[]);
  
  return(
    <>
    <h1>welcome to cybrom App:{cnt}</h1>
    
    </>
  )
}
export default App;










// import { useState } from "react";


// const App=()=>{
//   const [cnt,setCnt]= useState(0);
  
//   return(
//     <>
//     <h1>welcome to cybrom App:{cnt}</h1>
//     <button onClick={()=>{setCnt(cnt+1)}}>increment</button>
//     <button onClick={()=>{setCnt(cnt-1)}}>Decrement</button>
    
//     </>
//   )
// }
// export default App;


// import { useState } from "react";


// const App=()=>{
//   const [color,setColor]= useState("red");
  
//   return(
//     <>
//     <h1 style={{color:color}}>welcome to cybrom App:{color}</h1>
//     <button onClick={()=>{setColor("green")}}>click here</button>
//     <button onClick={()=>{setColor("yellow")}}>click here</button>
//     <button onClick={()=>{setColor("blue")}}>click here</button>
//     <button onClick={()=>{setColor("violet")}}>click here</button>

//     </>
//   )
// }
// export default App;



// import { useState } from "react";


// const App=()=>{
//   const [val ,setVal]=useState("khushi");
//   const myval=()=>{
//     setVal("spna")
//   }
//   return(
//     <>
//     <h1>welcome to cybrom App:{val}</h1>
//     <button onClick={myval}>click here</button>
//     </>
//   )
// }
// export default App;