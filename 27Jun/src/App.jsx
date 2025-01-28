import { useReducer } from "react";

const App=()=>{
 const reducer=(state,action)=>{
  switch(action)
  {
    case "myRed":
      state="red";
      return state

      case "myGreen":
      state="green";
      return state

      case "myBlue":
      state="blue";
      return state

      default :
      state="orange";
      return state
  }

 }
 const [myColor,dipatch]=useReducer(reducer,"orange");
  return(
    <>
    <button onClick={()=>dipatch("myRed")}>Red</button>
    <button onClick={()=>dipatch("myGreen")}>Green</button>
    <button onClick={()=>dipatch("myBlue")}>Blue</button>
    <br/>
    <br/>
<div style={{width:"200px",height:"200px",backgroundColor:myColor}}>

    </div>
    
    
    </>
  )
}
export default App;