import { Outlet } from "react-router-dom";

import Header from "./Component/Header";
import TopMenu from "./Component/TopMenu";
import Footer from "./Component/Footer";

const Layout=()=>{
    return(
        <>
      
           <Header/>
           <TopMenu/>
           
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;