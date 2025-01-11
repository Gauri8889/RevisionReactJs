import { Outlet } from "react-router-dom";
import TopMenu from "./Component/TopMenu";
import Banner from "./Component/Banner";

const Layout=()=>{
    return(
        <>
        <TopMenu/>
        <Banner/>
        <Outlet/>
            </>
    )
}
export default Layout;