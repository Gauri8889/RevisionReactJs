import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";

import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/update";
import EditData from "./pages/EditData";
import Counter from "./pages/Counter";
import ColorChange from "./pages/ColorChange";



const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Layout/>}>
      <Route index element={<Counter/>} />
      <Route path="counter" element={<Counter/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="Display" element={<Display/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="/editdata/:id" element={<EditData/>}/>
      <Route path="colorchange" element={<ColorChange/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;