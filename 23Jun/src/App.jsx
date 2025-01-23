import Cybrom from "./Cybrom";
const App=()=>{
  return(
    <>
    <h1>welcome to App</h1>
    <Cybrom/>
    </>
  )
}
export default App;



// import Comp from "./Comp";
// import { useState } from "react";
// import { createContext } from "react";
// const nameContext=createContext();



// const App=()=>{
//   const [user,setUser]=useState("anushka joshi");
//   return(
//     <>
//     <h1>welcome to App </h1>
//     <button onClick={()=>{setUser("spna ahirwar")}}>click here</button>
//     <h1>hello khushi:{user}</h1>
//     <nameContext.Provider value={{user,setUser}}>
//     <Comp/>
//     </nameContext.Provider>
//     </>
//   )
// }
// export default App;
// export {nameContext};








// // import Comp from "./Comp";
// // import { useState } from "react";
// // import { createContext } from "react";
// // const myContext=createContext();

// // const [user,setUser]=useState("anushka");

// // const App=()=>{
// //   return(
// //     <>
// //     <h1>compnent -5</h1>
// //     <h1>hello khushi:{user}</h1>
// //     <myContext.Provider value={{user}}>
// //     <Comp/>
// //     </myContext.Provider>
// //     </>
// //   )
// // }
// // export default App;
// // export {myContext};