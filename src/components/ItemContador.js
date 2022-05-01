import React from 'react'
import './App.css';

const ItemContador = ({ max = 10, cantidad, setCantidad, onAdd }) => {

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }
  const handleRestar = () => {
    cantidad > 0 && setCantidad(cantidad - 1)

  }


  return (
    <div>
        <button className={cantidad>0 ? "btn botonMin" : "btn btn-outline-danger" } 
        onClick={handleRestar}
        disabled={cantidad===0}>
         -</button>
        <span className="mx-2" > {cantidad } </span>
        <button className={`btn ${cantidad < max ? "btn botonMin":"btn btn-outline-danger" }`} 
        onClick={handleSumar}
        disabled={cantidad===max} >
        +</button>
        <br/>
        <button className="btn mx-5 my-3 boton " 
        onClick={onAdd}
        disabled={cantidad===0}
        >Agregar al carrito</button>
    </div >
  )
}

export default ItemContador