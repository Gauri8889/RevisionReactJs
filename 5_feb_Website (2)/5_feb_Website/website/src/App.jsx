

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import PayComplete from "./pages/PayComplete";
import ProductDetail from "./pages/ProductDetail";



const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="paycomplete" element={<PayComplete/>}/>
            <Route path="prodtail/:id" element={<ProductDetail />} />
          
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;
// import Layout from './Layout';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Cart from './pages/Cart';
// import CheckOut from './pages/CheckOut';
// import PayComplete from './pages/PayComplete';
// import ProductDetail from './pages/ProductDetail';

// function App() {
  

//   return (
//     <>
      
//       <BrowserRouter>
//        <Routes>
//         <Route path='/' element={<Layout/>}>
        
//          <Route index  element={<Home/>}/>
//          <Route path='home' element={<Home/>}/>
//          <Route path='about' element={<About/>}/>
//          <Route path='cart' element={<Cart/>}/>
//         <Route path='checkout'element={<CheckOut/>}/>
//         <Route path='paycomplete' element={<PayComplete/>}/>
//       <Route path='"prodetail/:id' element={<ProductDetail/>}/>
//         </Route>
//        </Routes>
//       </BrowserRouter>
      
//     </>
//   )
// }

// export default App
