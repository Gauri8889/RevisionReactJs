import axios from "axios";
import { useState,useEffect } from "react";

const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const laodData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).than((res)=>{
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
            <h1>Display Data</h1>
            <table width="400" border="1" bgcolor="yellow">
                <tr bgcolor="orange">
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                {ans}
            </table>
            </>
        )

    })
   
  }
  export default Display;