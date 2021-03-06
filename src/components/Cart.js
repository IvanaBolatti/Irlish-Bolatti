
import React from 'react';
import './App.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { BsFillTrashFill} from "react-icons/bs" ;
import { Link } from 'react-router-dom';



const Cart=() =>{ 
  const {cart,cartTotal,emtyCart,remuveItem}=useContext(CartContext)
 
  return(
  
   <div className='container my-5'>
     {
       cart.length===0 ?
       <div>
         <p>Carrito vacío</p>
         <hr/>
         <h2>Volver a comprar</h2>
         <Link to={"/"} className="btn btn mx-3 boton">Volver</Link>
       </div>
     :
      <>
      <h2>Tu compra</h2>
    <hr/>
      {
         cart.map((item)=>(
            <div key={item.id}>
            <h4>{item.nombre }</h4>
            <p>Cantidad: {item.cantidad} </p>
            <p>Monto: {item.cantidad * item.precio } </p>

           <button className="btn btn mx-3 botonVaciar" onClick={()=>remuveItem(item.id)}>
             <BsFillTrashFill/> 
             </button>
           <hr/>
           </div>
            ))    
        }

      <h3>Total:$ {cartTotal()} </h3>
      <hr/>
 
      <button className='btn mx-3 botonVaciar' onClick={emtyCart}>Vaciar carrito</button>
      <Link to="/Checkout" className='btn mx-3 boton'>Terminar mi compra</Link>
      <hr/>
      </>
   }
  </div>
  )
  
 }

  export default Cart;
