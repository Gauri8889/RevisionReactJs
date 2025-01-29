import axios from "axios";
import { useState,useEffect } from "react";
 const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const laodData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            console.log(res.data)
            setMydata(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    useEffect(()=>{
        laodData();
    }, []);

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
            <div style={{marginTop:"50px"}}>
        <table width="800" border="1" bgcolor="yellow">
                <tr bgcolor="orange">
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                {ans}
            </table>
            </div>
        </>
    )
   
  }
  export default Display;