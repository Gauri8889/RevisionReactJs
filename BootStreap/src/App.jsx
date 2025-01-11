import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import TopMenu from "./Component/TopMenu";
import Banner from "./Component/Banner";

const App=()=>{
    return(
        <>
        
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="TopMenu" element={<TopMenu/>}/>
        <Route path="Banner" element={<Banner/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
      
        </>
    )
}
export default App;
