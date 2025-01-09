import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Product from "./Component/Product";


const App=()=>{
    return(
        <>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About/>}/>
            <Route path ="contact" element={<Contact/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="product"element={<Product/>}/>
         
            
          </Route>
                
            </Routes>
            </BrowserRouter>
            
        </>
    )
}
export default App;