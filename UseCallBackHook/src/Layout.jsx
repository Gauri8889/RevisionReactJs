import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
      <>
      <Link to="home">home</Link>|
      <Link to="about">About</Link>|
      <Link to="contact">Contact</Link>|
      <Link to="servive">Service</Link>|
      <Link to="aboutcompany">AboutCompany</Link>
      <Outlet/>
      </>
    )
  }
  export default Layout;