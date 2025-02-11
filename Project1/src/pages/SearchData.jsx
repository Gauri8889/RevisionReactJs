
import { useState } from "react";
import axios from "axios";


const SearchData=()=>{
    const [rno,setRno] =useState("");
    const[mydata,setMydata]=useState([]);
    const handleSubmit=async()=>{
        let api=`http://localhost:3000/student/?rollno=${rno}`;
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    const ans = mydata.map((key)=>{
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
    return(
        <>
        <h1 style={{marginTop:"50px"}}>Search Data</h1>
        Enter Rollno : <input type="text" name="rno" value={rno}
        onChange={(e)=>{setRno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search Data</button>
        <hr  size="4" color="red"/>
         <table width="400" border="1" bgcolor="yellow">
         <tr bgcolor="green" border="2px">
            <th>Rollno</th>
            <th>Name</th>
            <th>city</th>
            <th>Fees</th>
         </tr>
         {ans}
         </table>
        </>
    )
}
export default SearchData;