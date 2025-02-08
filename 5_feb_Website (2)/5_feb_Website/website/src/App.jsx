
import Layout from './Layout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

function App() {
  

  return (
    <>
      
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
        
         <Route index  element={<Home/>}/>
         <Route path='home' element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='cart' element={<Cart/>}/>
        <Route path='checkout'element={<CheckOut/>}/>
        </Route>
       </Routes>
      
      
      </BrowserRouter>
      
    </>
  )
}

export default App
