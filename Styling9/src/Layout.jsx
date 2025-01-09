import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <> 
            <Link to="home">Home</Link>
            <Link to="about">about</Link>
            <Link to="contact">Contact</Link>
            <Link to="login">Login</Link>
            <Link to="product">Product</Link>

            <Outlet/>
        </>
    )
}
export default Layout;