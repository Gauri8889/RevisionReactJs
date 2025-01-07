import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
const App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element = {<Home/>}/>
        <Route path="home" element={<Home/>} />
       <Route path="About"element ={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>

        </Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;