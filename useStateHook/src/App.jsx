import { useState } from "react";
const App=()=>{
    const [name,setName]=useState("");
    const [city,setCity]=useState("");
   
    return(
        <>
           <h1>My Application form</h1>
           Enter name : <input type="text" value={name} onChange={(e)=>{setName(e,target.value)}}/>
           <br />
           Enter city : <input type="text" value={city} onChange={(e)=>{setCity(e,target.value)}}/>
           <br />
           <button>click here</button>
           </>
    
    )
}
export default App;


// import { useState,useEffect } from "react";
// const App=()=>{
//     const [count,setCount]=useState(0);
//     const [multi,setMulti]=useState(0);
//     useEffect(()=>{
//         setMulti(count*2);
//     },[count])
//     return(
//         <>
//             <h1>My App : {count}</h1>
//             <h1>Multiplication:{multi}</h1>
//             <button onClick={()=>{setCount(count+1)}}>Click here</button>
//         </>
//     )
// }
// export default App;