import { useState,useEffect } from "react";
import axios from "axios";

const App=()=>{
  const [mydata,setMydata]= useState([]);//mydata=[]
  const loaData=()=>{
    let api="";
    axios.get(api).than((res)=>{
      console.log(res.data);
      setMydata(res.data);
    });
  }
  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      </>
    )
  })
  useEffect(()=>{
    loaData();
  }, []);
  return(
    <>
    <h1>Welcome !!!</h1>

    <table border="1" width="400">
      <tr>
        <th>Rollno</th>
        <th>name</th>
        <th>city</th>
        <th>fees</th>
      </tr>

    </table>
    </>
  )
}
export default App;