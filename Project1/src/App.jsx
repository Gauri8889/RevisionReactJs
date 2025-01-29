import { BrowserRouter,Routes,Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import InsertData from "./pages/InsertData";
import Display from "./pages/Display";
import SearchData from "./pages/SearchData";
import Update from "./pages/Update";
import EditData from "./pages/EditeData";






const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="insertData" element={<InsertData/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="searchData" element={<SearchData/>}/>
         
          <Route path="update" element={<Update/>}/>
        <Route path="editdata" element={<EditData/>}/>


            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;     