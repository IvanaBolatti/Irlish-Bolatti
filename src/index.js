import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout';

function App() {
 

return(
  
  <CartProvider>
    
    <BrowserRouter>
    
    <NavBar/>
    

   <div>

    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>

   </div>

      <div style={
         {display: 'flex', 
         flexDirection: 'column', 
         justifyContent: 'center',
         width: '200px',
        }}> 
       </div> 
       
  
      </BrowserRouter>
      </CartProvider>
         
)

 };

 ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


