import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import AboutCompany from "./AboutCompany";
const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="service" element={<Service/>}/>
    <Route path="aboutcompany" element={<AboutCompany/>}/>


    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;