import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
      <>
         <Link to ="home">Home</Link> |
         <Link to ="About">About</Link> |
         <Link to ="Contact">Contact</Link> |
         <Link to = "Service">Service</Link>  |
         <Link to = "Nopage">Nopage</Link>

         <hr/>
         <Outlet/>
         <hr />
         wwwww.com.company
      </>
    )
  }
  export default Layout;