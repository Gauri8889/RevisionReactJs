import { useSelector } from "react-redux";

import Table from 'react-bootstrap/Table';
const Cart =()=>{
    const Cart = useSelector(state=>state.mycart.cart);

    const ans = Cart.map((key)=>{
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
            
            
         </tr>
            
            </>
        )
    })
    return(
        <>
        <h1 align="center">My Cart</h1>
         <hr />
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>brand</th>
          <th>Price</th>
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