// const App=()=>{
  
//   const getVal=(e)=>{
//     let name=e.target.name;
//     let value = e.target.value;
//     console.log( {[name]: value} );
    
   
//   }
//   return(
//     <>
//    <h1> wecome to Cybrom App</h1>
//     Enter name : <input type="text" name="stunm" onChange={getVal} />
//     <br/>
//     Enter city : <input type="text" name="city" onChange={getVal}/>
//     <br />
  
//     </>
//   )
// }
//  export default App;





// const App=()=>{
  
//   const display=(e)=>{
//     let mynm=e.target.name;
//     let myval = e.target.value;
//     console.log(mynm,myval);
    
//     alert(`Name : ${e.target.name} value : ${e.target.value}`)
//   }
//   return(
//     <>
//    <h1> wecome to Cybrom App</h1>
//     <button onClick="mybtn1" value="bplbutton" onChange={display}>Click here</button>

//     </>
//   )
// }
//  export default App;









const App=()=>{
  
  const myCybrom=(clg,e)=>{
    
    alert(`My college ${clg} my Event : ${e.type}`)
  }
  return(
    <>
   <h1> wecome to Cybrom App</h1>
    <button onClick={(e)=>{myCybrom("JLU",e)}}>Click here</button>

    </>
  )
}
 export default App;





// const App=()=>{
  
//   const display=(e)=>{
//     console.log(e);
//     alert("Cybrom : " + e.type)
//   }
//   return(
//     <>
//    <h1> wecome to Cybrom App</h1>
//     <button onClick={display}>Click here</button>

//     </>
//   )
// }
//  export default App;



// const App=()=>{
  
//   const myName=(nm,snm)=>{
//     alert(`My name : ${nm} ${snm}`)
//   }
//   return(
//     <>
//     <h1>welcome to cybrom</h1>
//     {/* <button onClick={()=>{myName("Raju sharma")}}>Click here</button> */}
//     <button onClick={()=>{myName("raju ","sharma")}}>Click here</button>

//     </>
//   )
// }
//  export default App;