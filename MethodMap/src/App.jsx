import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const ans = EmpData.map((key)=>
  <EmpDesign
  eno = {key.eno}
  nm = {key.name}
  dept = {key.department}
  sal = {key.salary}/>
)

const App=()=>{
  return(
    <>
    <h1>Emplyee List</h1>
    <table border="1">
      <tr>
        <th>Empno</th>
        <th>name</th>
        <th>Department</th>
        <th>salary</th>
      </tr>
      {ans}
    </table>
    </>
  )
};
export default App;