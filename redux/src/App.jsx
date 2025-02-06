// import { useSelector, useDispatch } from "react-redux";
// import { colorChange } from "./counterSlice";
// import { useState } from "react";
// const App = () => {
//   const [clr, setClr] = useState("")
//   const ans = useSelector(state => state.mycolor.color);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <h1>Welcome</h1>
      
//       <input 
//         type="text" 
//         value={clr} 
//         onChange={(e) => setClr(e.target.value)} 
//         placeholder="Enter color" 
//       />
//       <button onClick={() => dispatch(colorChange(clr))}>Change Color</button>
//       <div style={{ height: "400px", width: "400px", backgroundColor: ans }}></div>
//       <h1>{ans}</h1>
//     </>
//   );
// }

// export default App;

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTask,removeTask } from "./todoSlice";

const App = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector(state => state.myslice.tasks);
  const dispatch = useDispatch();
  const handleAddTask = () => {
      dispatch(addTask(task));
  };

  return (
    <>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter task" 
      />
      <button onClick={handleAddTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((key, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{key}</td>
              <td onClick={removeTask}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;