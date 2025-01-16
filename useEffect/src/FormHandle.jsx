import { useState } from "react";


const FormHandle=()=>{
    const [input,setInput]=useState({});//input={}
    //input={stuname:"stuname",city:"bhopal",subject:"python",fees:45600
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    return(
        <>
        <h1>My application form</h1>
        Enter name : <input type="text" name="stuname" onChange={handleInput}/>
        <br />
        Enter city : <input type="text" name="city" onChange={handleInput}/>
        <br />
        Enter subject : <input type="text" name="subject" onChange={handleInput}/>
        <br />
        Enter fees : <input type="text" name="fees" onChange={handleInput}/>
        <br />
        <button>click here</button>
        </>
    )
}
export default FormHandle;