import React from 'react';
import { useState, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import ItemContador  from "./ItemContador";
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
  
  const {cart,addItem,isInCart}=useContext(CartContext)
  console.log (cart)

  const navigate = useNavigate()
  const handleNavigate = () => {
  navigate(-1);
  }
  const [cantidad, setCantidad] = useState(1)
  
  
  
  const agregarAlCarrito = () => {
    const itemToAdd= { 
      item, 
      cantidad }
      console.log(itemToAdd)
      addItem(itemToAdd)
  }

  

  return (

    <div className="card" style={{ width: '18rem', marginLeft: '10%' }} >
      <img src={item.imagen} className="card-img-top" alt="Productos" />
      <div className="card-body"  >
        <h5 className="card-title" >{item.nombre}</h5>
        <p className="card-text">{item.category}</p>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text">Precio:$ {item.precio}</p>
{
  ! isInCart(item.id) 
  ?
  <ItemContador
  max={item.stock}
  cantidad={cantidad}
  setCantidad={setCantidad}
  onAdd={agregarAlCarrito(cantidad)} />
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