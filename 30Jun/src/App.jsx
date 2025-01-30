import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { colorChange } from "./colorSlice";

const App=()=>{
    const [color,setColor]=useState("");
  const Clr=useSelector(state=>state.myslice.color);
  const dispatch=useDispatch();
  return(
    <>
    <h1>welcome to counter App</h1>
    Enter Color : <input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
    <button onClick={()=>{dispatch(colorChange(color ))}}>click here</button>
    <br />
    <br />
    <div style={{color:"yellow", height:"200px",width:"200px", backgroundColor:Clr}}>

    </div>
    
    
    </>
  )
}
export default App;