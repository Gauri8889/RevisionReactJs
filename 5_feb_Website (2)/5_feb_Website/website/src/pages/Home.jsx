import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useEffect ,useState} from 'react';
import b1 from "../images/ban1.jpg";
import b2 from "../images/ban2.jpg";
import b3 from "../images/ban3.jpg";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../components/Counter';
import { addtoCart } from './cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home =()=>{
    const[myData,setMyData] = useState([]);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const loadData = async()=>{
        let api = "http://localhost:3000/products";
        let res = await axios.get(api).then((res)=>{
            setMyData(res.data);
        })

    }
    useEffect(() => {
        loadData();
    },[]);

    let ans = myData.map((key)=>{
        return(
            <>
               <Card style={{ width: '20rem',marginTop:"30px",marginBottom:"15px", display:"flex",justifyContent:"center" }}>
      <Card.Img variant="top" src= {key.image} style={{height:"400%",width:"100%"}} 
      onClick={()=>{navigate(`/prodtail/${key.id}`)}}/>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
            <p>Brand : {key.brand}</p>
           <p>Description : {key.description}</p>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addtoCart({id:key.id,name:key.name ,description:key.description,price:key.price,brand:key.brand,image:key.image,qnty:1}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
            </>
        )
    })
    


    return(
        <>

<Carousel style={{marginBottom:"10px"}}>
      <Carousel.Item>
      
        <img src= {b1}alt=""  style={{height:"400px",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Hurry Up</h3>
          <p>Offer is upto Limited time</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src= {b2} alt=""  style={{height:"400px",width:"100%"}} />
        <Carousel.Caption>
          <h3>Buy Latest I Phones under Great discount</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src= {b3} alt=""  style={{height:"400px",width:"100%"}}/>
        <Carousel.Caption>
          <h3>Good Deals on Smartphones</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1 align="center"> Our Products</h1>
          <div id='card'>
             {ans}
          </div>

          <Counter/>

        
        </>
    )
}
export default Home;