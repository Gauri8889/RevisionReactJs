
//1th method
// const name = ["raj","khushi","gauri","ankita","prnaali"];

// const ans = name.map((key)=>{
//   return(
//     <li>{key}</li>
//   )
// })
// const App=()=>{
//   return(
//     <>
//       <h1>welcome to react props</h1>
//       <ol>{ans}</ol>
//     </>
//     )}
// export default App;


//------------------------------------------------------------------------------------------------------
//second method
const Employee = [
  {
    emp :1001,
    name :"gauri",
    depatment:"it",
    salary:"60000"
  },
  {
  emp :1002,
    name :"khushi",
    depatment:"CSE",
    salary:"60000"
  },
  {
    emp :1002,
    name :"rakhi",
    depatment:"hr",
    salary:"8000"
  },
  {
  emp :1003,
    name :"nikita",
    depatment:"ec",
    salary:"60000"
},
{
  emp :1004,
    name :"ankita",
    depatment:"cs",
    salary:"4000"
},
{
    emp :1005,
    name :"chetali",
    depatment:"bsc",
    salary:"80000"
},
];

const ans=Employee.map((key)=> {
  return(
    <>
    <tr>
      <td>{key.name}</td>
      <td>{key.epmno}</td>
      <td>{key.depatment}</td>
      <td>{key.salary}</td>
    </tr>
    </>
  
);
});
  
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
//----------------------------------------------------------------------------------
//3th method iska data emp.jsx main rakha hai usko import kiya hai
// import EmpData from "./EmpData"
// const ans =Employee.map((key)=>{
//   return(
//     <>
//     <tr>
//     <td>{key.name}</td>
//      <td>{key.epmno}</td>
//      <td>{key.depatment}</td>
//      <td>{key.salary}</td>
//     </tr>
//     </>
//   )
// })
// const App=()=>{
//     return(
//       <>
//       <h1>Employee Data</h1>
//      <table border="1">
//       <tr>
//         <th>Emp no</th>
//         <th>name</th>
//         <th>department</th>
//         <th>salary</th>
//       </tr>
//       {ans}
//      </table>
//      </>
//     )
//   }
//   export default App;


//--------------------------------------------------------------------------------------------------





 