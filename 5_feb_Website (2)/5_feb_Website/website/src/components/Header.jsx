import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header =()=>{
  const Cart = useSelector((state)=>state.mycart.cart);
  const mylen = Cart.length;
  const navigate = useNavigate();
    return(
        <>
          <div className="header"> 
          <FaShoppingCart onClick={()=>{navigate("/cart")}} /> {mylen}
          </div>
        
        </>
    )
}
export default Header;