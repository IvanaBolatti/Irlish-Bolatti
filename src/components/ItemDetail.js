import React from 'react';
import { useState, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import ItemContador  from "./ItemContador";
import {CartContext} from './CartContext';

const ItemDetail = ({id, nombre, imagen,precio, stock, descripcion,category }) => {
  
  const {cart,addItem,isInCart}=useContext(CartContext)
  console.log (cart)
  const [cantidad, setCantidad] = useState(1)
  
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
      cantidad }

      console.log(itemToAdd)
      addItem(itemToAdd)
  }

  

  return (
   
    <div className="card" style={{ width: '18rem', marginLeft: '10%' }} >
      <img src={imagen} className="card-img-top" alt="Productos" />
      <div className="card-body"  >
        <h5 className="card-title" >{nombre}</h5>
        <p className="card-text">{category}</p>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">Precio:$ {precio}</p>
{
  ! isInCart(id) 
  ?
  <ItemContador
  max={stock}
  cantidad={cantidad}
  setCantidad={setCantidad}
  onAdd={agregarAlCarrito} />
  : 
  <Link to="/cart" className='btn btn-success my-3'> Terminar la compra</Link>
}

        <hr />  
        <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
      </div>
    </div>

  )
}

export default ItemDetail;