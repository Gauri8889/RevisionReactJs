import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Layout = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" fixed='top' expand="lg" className="custom-navbar">
                <Container>
                    <img 
                        style={{ height: "30px", backgroundColor: "aqua"}} 
                        src="https://www.shutterstock.com/image-vector/id-card-icon-user-identity-260nw-516445126.jpg" 
                        alt="Logo" 
                    />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: "10px" }}>
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="insertData">InsertData</Nav.Link>
                            <Nav.Link as={Link} to="display">Display</Nav.Link>
                            <Nav.Link as={Link} to="searchData">SearchData</Nav.Link>
                            <Nav.Link as={Link} to="update">Update</Nav.Link>
                            <Nav.Link as={Link} to="editData">EditData</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <center>
                <hr size="1" color="skyblue" />
                <Outlet />
                <hr size="1" color="skyblue" />
                <div style={{backgroundColor:'#00ABF0', margin:'10px',padding:'20px',height:'100%'}}>
                    <p>© 2024 Your Company Name. All rights reserved.</p>
                </div>
            </center>
        </>
    );
}

export default Layout;
