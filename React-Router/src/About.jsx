import { Link,Outlet } from "react-router-dom";
const About=()=>{
    return(
        <>
        <h1>this is About page</h1>
        <Link to ="AboutCompany">AboutCompany</Link> |
         <Link to ="Aboutservice">Aboutservice</Link> |
         <Link to ="Aboutproduct">Aboutproduct</Link> 
         <hr/>
         <Outlet/>
         <hr />
         wwwww.com.company
        </>
    )
}
export default About;