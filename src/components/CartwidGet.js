import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BsFillCartFill} from "react-icons/bs" ;
import { CartContext } from './CartContext';

const CartwidGet = () => {

    const {cantQuantity}=useContext(CartContext)

  return (
    <Link to={"/cart"} className="cartwidGet " >
         <BsFillCartFill/>
         <span>{cantQuantity()}</span>
    </Link>
   
  )
}



export default CartwidGet