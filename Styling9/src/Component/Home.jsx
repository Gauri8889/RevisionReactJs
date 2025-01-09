const Home=()=>{
    return(
        <>
      <marquee>
        <span style={{marginLeft:'20px'}}>
        Saree Collection
            </span>
            <span style={{marginLeft:'20px'}}>  Saree Collection</span>
            <span style={{marginLeft:'20px'}}>  Saree Collection</span>
      </marquee>
      <img src="saree.jpg"  width="100%" height="600px" />
      <div className="img">
       <h1> Marathi Saree Collection</h1>
      </div>
     
        <div className="img2">
            <div><img src="s1.jpeg" height="250px" width="300px" /></div>
            <div><img src="s2.jpeg" height="250px" width="300px" /></div>
            <div><img src="s3.jpg" height="250px" width="300px"/></div>
        </div>
        <div className="btn">
            <div><button>Order</button></div>
            <div><button>Order</button></div>
            <div><button>Order</button></div>
        </div>
   
        </>
    )
}
export default Home;