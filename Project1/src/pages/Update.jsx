import axios from "axios";
import { useState, useEffect } from "react";
 import delimg from "../image/del.png";
 import edimg from "../image/ed.png";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [mydata, setMydata]=useState([]);
    const navigate= useNavigate();
    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, []);

    const myDel=(id)=>{
        let api=`http://localhost:3000/student/${id}`;
        axios.delete(api).then((res)=>{
            alert("Data deleted!!");
        })
        loadData();
    }

    const myEdit=(id)=>{
           
        navigate(`/editdata/${id}`);
    }

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td> 
                    <a href="#" onClick={(e)=>{myEdit(key.id)}}>
                    <img src={edimg} width="20" height="20" />
                    </a>
                    
                </td>
                <td> 
                    <a href="#" onClick={()=>{myDel(key.id)}}>
                    <img src={delimg} width="20" height="20" />
                    </a>
                </td>
              </tr>
            </>
        )
    })
    return(
        <>
         <h1 style={{marginTop:"50px"}}> Update record!</h1>
         <table width="800" bgcolor="pink">
            <tr bgcolor="blue">
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th>Edite</th>
                <th>Delete</th>
               
            </tr>
            {ans}
         </table>
        </>
    )
}
export default Update;