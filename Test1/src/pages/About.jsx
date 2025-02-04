import { useState } from "react";
const About =()=>{
    const [count,Counter] = useState(0);
    const [color,setColor]= useState("red");
return(
      <>
      <h1 style={{color:color}}>color change App:{color}</h1>
    <button onClick={()=>{setColor("green")}}>click here</button>
    <button onClick={()=>{setColor("yellow")}}>click here</button>
    <button onClick={()=>{setColor("blue")}}>click here</button>
    <button onClick={()=>{setColor("violet")}}>click here</button>
    <hr />
        <h1>App Counter</h1>
        <button onClick={()=>{Counter(count+10)}}>Increment</button>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{Counter(count-10)}}>Decrement</button>
       
        
      </>
    )
}
export default About;