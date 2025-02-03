
import { Link,Outlet } from "react-router-dom";


const Layout=()=>{
    return(
      <>
     <Link to="counter">Counter</Link>|
     <Link to="insert">Insert</Link>|
     <Link to="display">Display</Link>|
     <Link to="search">Search</Link> |
     <Link to="update">Update</Link>|
     <Link to="editdata">EditData</Link>|
     <Link to="colorchange">ColorChange</Link>
     <hr />
     <Outlet/>
     <hr />
     welcome to cybrom
      </>
    )
  }
  export default Layout;