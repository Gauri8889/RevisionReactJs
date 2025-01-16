import { useState } from "react";
import FormHandle from "./FormHandle";
const App=()=>{
    const [name,setName]=useState("");
    const [city,setCity]=useState("");
   
    return(
        <>
           <h1>My Application form</h1>
           Enter name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
           <br />
           Enter city : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
           <br />
           <button>click here</button>

           <FormHandle/>
           </>
    
    )
}
export default App;