import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const firstName = "John";
  const x= 2;
  const mystyle = {
    color :"black",
    backgroundColor:"blue",
    fontWeight:"bold",
    border:"2px solid red",
    borderRadius:"20px",
    padding:"20px"

  };
  return(
  <>
     <img style={{height:"500px"}}src="src/mrathi.jpg"/>

    <h1 className="heading">Mrathi Sadi</h1>
    <p style={{color:"green",backgroundColor:"pink"}}>Price : 5000Rs.

    </p>
    <h2>Hellow {firstName}</h2>
    <h2>{6*6+7876876}</h2>
    <p style={mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi hic suscipit, quo doloremque, sapiente,
       at quae ea ad nobis reprehenderit dignissimos. Tempora voluptates consectetur magnam. Animi illum
        officia a voluptatibus?

    </p>
    {/* Ternary Operater */}
     <h1>{x>5 ? "Number is grater ":"Number is smaller"}</h1>
  </>
  )
 
}

export default App
