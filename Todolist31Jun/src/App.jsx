import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addData ,deletData,UncompliteData,compliteData,EditData } from "./todoSlice";

const App=()=>{
  const[input, setInput]=useState("");
  const[Myid , setMyid]=useState("");
  const [btnStatus , setbtnStatus]=useState(true)
  const workData=useSelector((state)=>state.todotask.task);
  const dispatch=useDispatch();

  //handleSubmite() add data..................
  const handlSubmite=()=>{
    dispatch(addData({id:Date.now(), work:input,status:false}))
    setInput("")
  };

  //deletData .......................
  const deletWork=(id)=>{
    dispatch(deletData(id))
  };
//.........Complited()
const complitework=(id,status)=>{
  if(status)
  {
    dispatch(UncompliteData(id))
  }
  else{
    dispatch(compliteData(id))
  }
};

//EditData() editWork()
const editWork=(id,wrk)=>{
  setInput(wrk);
  setMyid(id)
  setbtnStatus(false)
}
//EditDataSave() button
const EditDataSave=()=>{
  dispatch(EditData({id: Myid, work:input} ))
  setInput("")
  setbtnStatus(true)
  
}




 let sno=0;
 const ans=workData.map((key)=>{
  sno++;
  return(
    <>
    <tr>
      <td>{sno}</td>
      <td>
        {key.status ? (<span style={{color:"red", textDecoration:"line-through"}}>{key.work}</span>):
      (<span style={{color:"black", textDecoration:"none"}}>{key.work}</span>)}
      </td>

      <td>
        <button onClick={()=>{deletWork(key.id)}}>Delete</button>
      </td>

      <td>
      <button onClick={()=>{complitework(key.id,key.status)}}>
      {key.status? "complited" : "Uncomplited"}</button>
      </td>

      <td><button onClick={()=>{editWork(key.id , key.work)}}>Edit</button></td>
    </tr>
    </>
  )
 })




  return(
    <>
    <center>
    <h1>The React Redux Toolkit Todo app</h1>
    Enter your Task: <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    {btnStatus?(<button onClick={handlSubmite}>Add</button>):(<button onClick={EditDataSave}>EditData</button>)}
    <hr/>
    <table border="1">
      <thead>
      <tr>
        <th>S.No.</th>
        <th>Task Name</th>
        <th>Action</th>
        <th>Status</th>
        <th>Edit</th>
      </tr>
      </thead>
      <tbody>{ans}</tbody>
    </table>

    </center>
    </>
  )
}
export default App;


// import { useState,useEffect } from "react";
// import { useSelector,useDispatch } from "react-redux";
// import { addTask ,removeTask, taskComplete,taskInComplete, myEditSave} from "./todoSlice";
// const App=()=>{
//     const [val,setVal]=useState("");
//     const [myBtn, setMyBtn]=useState(true);
//     const [taskId, setTaskID]=useState("");
//     const Task=useSelector(state=>state.myslice.task);
//     const dispatch=useDispatch();
//     console.log(Task);
//     const myTaskComplete=(id)=>{
//         dispatch(taskComplete({id:id}))
//     }
//     const myTaskInComplete=(id)=>{
//         dispatch(taskInComplete({id:id}))
//     }
//     const myEdit=(id,work)=>{
//         setVal(work)
//         setMyBtn(false)
//         setTaskID(id)
//     }

//     const EditSave=()=>{
//         dispatch(myEditSave({id:taskId, work:val}))
//         setMyBtn(true)
//         setVal("")
//     }
//     let sno=0;
//     const ans=Task.map((key)=>{
//         sno++;
//         return(
//             <>
//             <tr>
//                 <td>{sno}</td>
//                 <td>{key.status=="InComplete"?(
//                     <>
//                     {key.task}
//                     </>
//                 ):(
//                     <>
//                     <span style={{color:"red", textDecoration:"line-through"}}>{key.task}</span>
//                     </>
//                 )}
//                 </td>
//                 <td>
//                     <button onClick={()=>{dispatch(removeTask({id:key.id}))}}>Delete</button>
//                 </td>
//                 <td>
//                         {key.status=="Complete"?(
//                             <>
//                             <button onClick={()=>(myTaskComplete(key.id))}>InComplete</button>
//                             </>
//                         ):(
//                             <>
//                             <button onClick={()=>(myTaskInComplete(key.id))}>Complete</button>
//                             </>
//                         )}
//                    </td>
//             </tr>
//             </>
//         )
//     })
//     return(
//         <>
//         <h1>Welcome to Do App</h1>
//         <hr />
//         Enter your Task : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
//         {myBtn?(
//             <>
//         <button onClick={()=>{dispatch(addTask({id:Date.now(),task:val,status:"Incomplete"}))}}>Add Task</button>
        
//         </>
//         ):(
//             <>
//             <button onClick={EditSave}>Edit Save</button>
//             </>
//         )}
//         <hr />
//         <table border="1" width="400">
//             <tr>
//                 <th>#</th>
//                 <th>Our Task</th>
//                 <th></th>
//             </tr>
//             {ans}
//         </table>
//         </>
//     )
// }
// export default App;