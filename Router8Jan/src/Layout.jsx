import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
      <Link to="service">Service</Link>
      <Link to="contact">Contact</Link>
      <hr />
      <Outlet />
      <hr />
      www.mycompney.com
    </>
  );
};
export default Layout;
