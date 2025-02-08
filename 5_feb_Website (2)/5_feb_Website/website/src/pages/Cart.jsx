import { useSelector,useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { qntyInc,qntyDec,proDelete } from "./cartSlice";
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Cart =()=>{
    const Cart = useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    let totAmount=0;
    const ans = Cart.map((key)=>{
      totAmount+=key.price*key.qnty;
        return(
            <>
             <tr>
            <td>
                <img src={key.image} width="100" height="100"/>
            </td>
            <td>{key.name}</td>
            <td>{key.description}</td>
            <td>{key.brand}</td>
            <td>{key.price}</td>
           <td><FaMinusCircle  onClick={()=>{dispatch(qntyDec({id:key.id}))}}/>
             {key.qnty}  
             <FaCirclePlus onClick={()=>{dispatch(qntyInc({id:key.id}))}}/></td>
           <td>{key.price*key.qnty} </td>

           <td> {key.price * key.qnty}  </td>
             <td style={{color:"red", fontSize:"25px"}}>
             <MdDelete  onClick={()=>{dispatch(proDelete(key.id))}}/>
             </td>
         </tr>
            
            </>
        )
    })
    return(
        <>
        <h1 align="center">My Cart</h1>
        <h3 align="center">
          <FaRupeeSign />{totAmount}
          </h3>
          <h1 align="right">
          <Button variant="primary" onClick={()=>{navigate("/checkout")}}>Checkout</Button>
          </h1>
         <hr />
       
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>brand</th>
          <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        </tr>
      </thead>
      <tbody> 

       {ans}
        </tbody>
        </Table>
        

              
         
        </>
    )
}

export default Cart;