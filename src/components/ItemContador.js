import React from 'react'
import { Link } from 'react-router-dom'

const ItemContador = ({max=10, cantidad, setCantidad, onAdd, agregado,setAgregado}) => {
 
  const handleSumar= ()=>{
    cantidad< max && setCantidad(cantidad + 1)
 }
  const handleRestar= ()=>{
    cantidad> 1 && setCantidad(cantidad - 1)

  }

  const handleClick= () =>{
    setAgregado(true)
  }

  window.addEventListener('click',handleClick())


 
  return (
    <div>
        <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
        <span className="mx-2"> {cantidad } </span>
        <button className="btn btn-primary" onClick={handleSumar}>+</button>
        <br/>
        <Link to={`/cart`}>  <button className="btn btn-success my-2" onClick={onAdd}>Agregar al carrito</button></Link>
    </div>
  )
}

export default ItemContador