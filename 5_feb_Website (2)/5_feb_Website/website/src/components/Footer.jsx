// import { Link } from "react-router-dom"

const Footer=()=>{
    return(
        <>
        
        <footer class="footer">
        <div class="footer-cont">
            <div class="footer-row">
                <div class="footer-col">
                    {/* <img src="/src/navbar-img/navbar-1.jpeg" alt=""/> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Sapiente dolore aliquid eum sed natus tempore</p>
                </div>
            
            <div class="footer-col-1">
                <h1>Quick Links</h1>
                <ul>
                    <li><a href="#" className="b">Home</a></li>
                    <li><a href="#" className="b">About</a></li>
                    <li><a href="#" className="b">Project</a></li>
                    <li><a href="#" className="b">chat with us</a></li>

                  
                    
                </ul>
            </div>
            <div class="footer-col-1">
                <h1>Contact</h1>
                <ul>
                    <li ><a href="#" className="b">219 Durgesh Vihar J.K Road </a></li>
                    <li ><a href="#" className="b">Contact No: 9752512960</a></li>
                  
                   
                </ul>
            </div>
            <div class="footer-col-2">
                <div class="buttons">
                    <input type="email" placeholder="Email address"/>
                    <button><a href="#">Sign Up</a></button>
                </div>
                <img src="/src/images/footer.jpeg" alt=""/>
            </div>
        </div>
        <div class="footer-row-2">
            <p>Copyright ©2024 All rights reserved | This template is made with<i class="fa-solid fa-heart"></i> by <span>Colorlib</span></p>
        </div>
        </div>
       </footer>
        </>
    )
}

export default Footer;