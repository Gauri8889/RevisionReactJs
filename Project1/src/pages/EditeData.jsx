import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const EditData=()=>{
    const {id} =useParams();
    const [mydata, setMydata]= useState({});
    const lodaData=()=>{
        let api=`http://localhost:3000/student/${id}`;

        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    useEffect(()=>{
        lodaData();
    }, [])

 const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setMydata(values=>({...values, [name]:value}));
     console.log(mydata);

 }

 const handleSubmit=()=>{
   let api=`http://localhost:3000/student/${id}`;

    axios.put(api, mydata).then((res)=>{
        alert("data updated!!!");
    })
 }


    return(
        <>
        <div style={{marginTop:"50px", backgroundColor:"pink", height:"350px", width:"400px"}}>
          <h1> Edit data {id}</h1>
          Edit Rollno : <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
          <br/>
          <br />
          Edit Name : <input type="text" name="name" value={mydata.name} onChange={handleInput} />
          <br/>
          <br />
          Edit City : <input type="text" name="city" value={mydata.city} onChange={handleInput} />
          <br/>
          <br />
          Edit Fees : <input type="text" name="fees" value={mydata.fees} onChange={handleInput} />
          <br/>
          <br />
          <button onClick={handleSubmit}> Edite Save!</button>
          </div>
        </>
    )
}

export default EditData;