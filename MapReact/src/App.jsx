import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const ans=EmpData.map((key)=> <EmpDesign
eno={key.empno}
nm={key.name}
dept={key.department}
sal={key.salary}/>
)
  
const App=()=>{
  return(
    <>
    <h1>Employee Data</h1>
   <table>
    <tr>
      <th>Emp no</th>
      <th>name</th>
      <th>department</th>
      <th>salary</th>
    </tr>
    {ans}
   </table>
   </>
  )
}
export default App;



// const name = ["raj","khushi","gauri","ankita","prnaali"];

// const ans = name.map((key,index)=>{
//   return(
//     <li>{key} {index}</li>
//   )
// })

 