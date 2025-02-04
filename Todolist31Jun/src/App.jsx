import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTask ,removeTask, taskComplete,taskInComplete, myEditSave} from "./todoSlice";


const App=()=>{
    const [Val,setVal]=useState("");
    const [myBtn, setMyBtn]=useState(true);
    const [taskId, setTaskID]=useState("");
    const Task=useSelector(state=>state.myslice.task);
    const dispatch=useDispatch();
    console.log(Task);
    const myTaskComplete=(id)=>{
        dispatch(taskComplete({id:id}))
    }
    const myTaskInComplete=(id)=>{
        dispatch(taskInComplete({id:id}))
    }
    const myEdit=(id,work)=>{
        setVal(work)
        setMyBtn(false)
        setTaskID(id)
    }

    const EditSave=()=>{
        dispatch(myEditSave({id:taskId, work:Val}))
        setMyBtn(true)
        setVal("")
    }
    let sno=0;
    const ans=Task.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.status=="InComplete"?(
                    <>
                    {key.task}
                    </>
                ):(
                    <>
                    <span style={{color:"red", textDecoration:"line-through"}}>{key.task}</span>
                    </>
                )}
                </td>
                <td>
                    <button onClick={()=>{dispatch(removeTask({id:key.id}))}}>Delete</button>
                </td>
                <td>
                        {key.status=="InComplete"?(
                            <>
                            <button onClick={()=>(myTaskComplete(key.id))}>InComplete</button>
                            </>
                        ):(
                            <>
                            <button onClick={()=>(myTaskInComplete(key.id))}>Complete</button>
                            </>
                        )}
                   </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Welcome to Do App</h1>
        <hr />
        Enter your Task : <input type="text" value={Val} onChange={(e)=>{setVal(e.target.value)}}/>
        {myBtn?(
            <>
        <button onClick={()=>{dispatch(addTask({id:Date.now(),task:Val,status:"Incomplete"}))}}>Add Task</button>
        
        </>
        ):(
            <>
            <button onClick={EditSave}>Edit Save</button>
            </>
        )}
        <hr />
        <table border="1" width="400">
            <tr>
                <th>#</th>
                <th>Our Task</th>
                <th></th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default App;