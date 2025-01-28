




import { useEffect, useState,useMemo } from "react"

const Cont=()=>{
    const [count ,setCount]= useState(0);
    const [name , setName] =useState("");
    const thousendNumber = expensiveFunction(count);
    return(
        <>
        <input type="number" value={count} onChange={(e)=>setCount(parseInt(e.target.value))}/>

        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

        <div>{thousendNumber}</div>
        </>
    )
}
export default Cont;