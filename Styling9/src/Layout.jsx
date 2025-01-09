import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <> 
          <div className="nav">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/product">Product</Link>
            <button>Sign Up</button>
          </div>

          {/* The Outlet component will render the matched route's component */}
          <Outlet/>
        </>
    );
};

export default Layout;
