import { Outlet } from "react-router-dom";

import Header from "./Component/Header";
import TopMenu from "./Component/TopMenu";
import Footer from "./Component/Footer";

const Layout=()=>{
    return(
        <>
      

        <div id="myTop">
        <Header/>
        <TopMenu/>
        </div>
           
           
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;