import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar1 from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';

const Layout = ()=>{
    return(
        <>
        <Container fluid="yes">
          <div id="topNav">
          <Header/>

          <Navbar1/>
          </div>
 
          <Outlet/>
          <Footer/>
          </Container>
        
        </>
    )
}

export default Layout;