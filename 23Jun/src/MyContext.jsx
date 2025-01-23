import { Children, createContext,useState } from "react";
const userContext =createContext();


const MyContext=()=>{
    const [name ,setName]=useState("Aryan");
    return(
      <>
      <userContext.Provider  value={{name, setName}}>
        {Children}

      </userContext.Provider>
      
      </>
    )
  }
  export default MyContext;
  export {userContext};
  
  