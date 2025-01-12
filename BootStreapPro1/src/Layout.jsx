import { Outlet } from "react-router-dom";

import Header from "./component/Header";
import TopMenu from "./component/TopMenu";
import Footer from "./component/Footer";

const Layout=()=>{
    return(
        <>
         <Header/>
        <TopMenu/>
        <Footer/>
    
            <Outlet/>

          <Footer/>
        
        </>
    )
}

export default Layout;