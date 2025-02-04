import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
  
    return(
        <>



        <div style={{backgroundColor:"blue", height:"50px", width:"1310px",border:"5px"}}>
        <Link to="home">Home</Link>|
        <Link to="about">About</Link>|
        <Link to="faculty">Faculty</Link>|
        <Link to="ourcourses">OurCourses</Link>|
        <Link to="contact">Contact</Link>|
        </div>
        <hr />
        <Outlet/>
       
        </>
    )
}
export default Layout;