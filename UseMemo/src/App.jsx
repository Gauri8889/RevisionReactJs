import {useEffect, useState } from "react";


const App=()=>{
  const [myadd, setMyAdd]=useState(0);
  const [mysub , setMysub]=useState(100);
  const multi=()=>{
    console.log("****************");
    return myadd*10;
  }
  return(
    <>
    <h1>My Add :{myadd}</h1>
    <h2>My Sub :{mysub}</h2>
    <h1>Myultiplicat :{multi()}</h1>
    <button onClick={()=>{setMyAdd(myadd+1)}}>Addition</button>
    <button onClick={()=>{setMysub(mysub+1)}}>Subtraction</button>

    </>
  )
}
export default App;