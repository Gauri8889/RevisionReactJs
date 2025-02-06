import { useState } from "react";
import axios from "axios";

const InsertData=()=>{
    const [input,setInput]= useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/student";

        axios.post(api, input).then((res)=>{
            alert("Data save !!!")
        });
    }
    return(
      <>
    <div style={{marginTop:"50px", backgroundColor:"green", height:"350px", width:"400px"}}>
      <h1>Insert data</h1>
      Enter Rollno : <input type="text" name="rollno" onChange={handleInput}/>
        <br />
        <br/>
      Enter Name : <input type ="text" name="name" onChange={handleInput}/>
      <br />
      <br/>
      Enter City : <input type ="text" name="city" onChange={handleInput}/>
      <br />
      <br/>
      Enetr Fees : <input type="text" name="fees" onChange={handleInput}/>
      <br />
      <br/>
      <button onClick={handleSubmit}>Data save</button>
     </div>
      </>
    )
  }
  export default InsertData;

// const InserData=()=>{
//     return(
//         <>
//          <h1 style={{marginTop:"50px"}}> Welcome To Home Page</h1>
//         </>
//     )
// }


// export default InserData;