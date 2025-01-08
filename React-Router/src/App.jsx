import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./service";
import Nopage from "./Nopage";
import AboutCompany from "./AboutCompany";
import Aboutproduct from "./AboutProduct";
const App=()=>{
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element = {<Home/>}/>
        <Route path="home" element={<Home/>} />
       <Route path="About"element ={<About/>}/>
          <Route index element={<AboutCompany/>}/>
          <Route path="AboutCompany" element={<AboutCompany/>}/>
          <Route path="Aboutservice" element={<Aboutservice/>}/>
          <Route path="Aboutproduct" element={<Aboutproduct/>}/>
          
        <Route path="Contact" element={<Contact/>}/>
        <Route path ="Service" element={<Service/>}/>
        <Route path ="*" element={<Nopage/>}/>

        </Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;