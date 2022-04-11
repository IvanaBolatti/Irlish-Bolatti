import React from 'react';
import { useState, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import ItemContador  from "./ItemContador";
import {CartContext} from './CartContext';


const ItemDetail = ({id, nombre, imagen,precio, stock, descripcion,category }) => {
  
  const {cart,addItem,isInCart}=useContext(CartContext)
  console.log (cart)
  const [cantidad, setCantidad] = useState(0)
  
  const navigate = useNavigate()
  const handleNavigate = () => {
  navigate(-1);
  }
   
  const agregarAlCarrito = () => {
    const itemToAdd= { 
      id,
      nombre,
      imagen,
      stock, 
      descripcion,
      category,
      precio,
      cantidad }

     cantidad>0 && addItem(itemToAdd)
  }

  

  return (
   
    <div className="card" style={{ width: '18rem', marginLeft: '10%' }} >
      <img src={imagen} className="card-img-top" alt="Productos" />
      <div className="card-body"  >
        <h5 className="card-title" >{nombre}</h5>
        <p className="card-text">Precio:$ {precio}</p>
        <p className="card-text">{descripcion}</p>
        <small>Stock disponible:{stock}</small>
        {stock===0 && <p style={{color:'red', fontWeight:"700"}}>'Sin stock!</p>}


        
{
  !isInCart(id) 
  ?
  <ItemContador
  max={stock}
  cantidad={cantidad}
  setCantidad={setCantidad}
  onAdd={agregarAlCarrito} />
  : 
  <Link to="/cart" className="btn btn-success my-3"> Terminar la compra</Link>
}

        <hr />  
        <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
      </div>
    </div>

  )
}

export default ItemDetail;