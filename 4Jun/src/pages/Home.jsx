
import Carousel from 'react-bootstrap/Carousel';


import b1 from "../images/ban1.jpg";
import b2 from "../images/ban2.jpg";
import b3 from  "../images/ban3.jpg";

import ProductData from '../ProductData';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home=()=>{
    
  const ans=ProductData.map((key)=>{

    return(
        <>
         <Card style={{ width: '18rem'}} className='proImage'>
          <Card.Img variant="top" src={key.images} style={{height:"400px",width:"16rem"}}/>
           <Card.Body>
             <Card.Title> {key.name} </Card.Title>
             <Card.Text>
             Brand : {key.brand}
             <br />
             Price : {key.price}
            </Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>
        
        
        </>
    )
})



    return(
        <>
  
  <Carousel>
      <Carousel.Item>
          <img src={b1}  width="100%" height="400px"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2}  width="100%" height="400px"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3}  width="100%" height="400px"  />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          <h1 align="center">Our Product</h1>
   <div id='productShow'>
    {ans}
   </div>

        </>
    )
}
export default Home;