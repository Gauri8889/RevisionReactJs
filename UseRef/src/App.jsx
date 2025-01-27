//useRef
import { useRef } from "react";
const App=()=>{
  const myRef=useRef();
  const myFont=()=>{
  myRef.current.style.fontFamily="verdana";
 
}
const myColor=()=>{
  myRef.current.style.color="red";
}
const myBg=()=>{
  myRef.current.style.backgroundColor="pink";
  myRef.current.style.borderRadius="50px";
  myRef.current.style.border="5px dotted red";
}


  return(
    <>
   <button onClick={myFont}>font</button>
   <button onClick={myColor}>color</button>
   <button onClick={myBg}>background</button>
   <br/>
   <br/>
   <div ref={myRef} style={{width:"300px",height:"300px",border:"2px solid black"}}>
    <h1>welcome to Bhopal</h1>

   </div>
    </>
  )
}
export default App;

