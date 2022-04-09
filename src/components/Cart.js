
import React from 'react';
import './App.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { BsFillTrashFill} from "react-icons/bs" ;



const Cart=() =>{ 
  const {cart,cartTotal,emtyCart,remuveItem}=useContext(CartContext)
  console.log(cart)
 
  return(
  
   <div className='container my-5'>
    <h2>Tu compra</h2>
    <hr/>
      {
         cart.map((item)=>(
            <div key={item.id}>
            <h4>{item.nombre }</h4>
            <p>Cantidad: {item.cantidad} </p>
            <p>Precio: {item.cantidad * item.precio } </p>

           <button className="btn btn-danger" onClick={()=>remuveItem(item.id)}>
             <BsFillTrashFill/> 
             </button>
           <hr/>
           </div>
            ))
           
       }

  <h3>Total:$ {cartTotal()} </h3>
  <hr/>
 
  <button className='btn btn-danger' onClick={emtyCart}>Vaciar carrito</button>
  <hr/>
  
  </div>
  )
  }

  export default Cart;
