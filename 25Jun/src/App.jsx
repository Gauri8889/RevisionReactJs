//useReducer
import React,{useReducer} from "react";
const App=()=>{
  const initialState = {count:0};

  const reducer =(state,action)=> {
    switch(action.type){
      case 'increment':
      return{count:state.count +1};
      case 'decrement':
        return{count:state.count -1};
        case 'reset':
          return{count:state.count =0 }
          default:
            return{count:state.count}
    }
  }
  const [state,dispatch]=useReducer(reducer,initialState);
  return(
    <>
    <h1>Count:{state.count}</h1>
    <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
    <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>
  )
}
export default App;



















// import { useRef } from "react";
// const App=()=>{
// const changeColor=()=>{
//   myRef.curruent.style.color="green";
//   myRef.curruent.innerHTML="this is Bhopal";

// }


//   return(
//     <>
//     <h1 ref={myRef} style={{color:"red"}}>welcome to Login App</h1>
//     <button onChange={changeColor}>Click here</button>
//     </>
//   )
// }
// export default App;