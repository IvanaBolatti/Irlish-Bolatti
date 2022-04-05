import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ItemContador from "./ItemContador";


const ItemDetail = ({ item }) => {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(-1);
  }
  const [cantidad, setCantidad] = useState(1)
  
  const agregarAlCarrito = (cantidad ) => {
    const ItemToAdd = { 
      item, 
      cantidad }
  }

  return (

    <div className="card" style={{ width: '18rem', marginLeft: '10%' }} >
      <img src={item.imagen} className="card-img-top" alt="Productos" />
      <div className="card-body"  >
        <h5 className="card-title" >{item.nombre}</h5>
        <p className="card-text">{item.category}</p>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text">Precio:$ {item.precio}</p>

        <ItemContador
          max={ parseInt (item.stock)}
          cantidad={cantidad}
          setCantidad={setCantidad}
          onAdd={agregarAlCarrito} />

        <hr />
        <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
      </div>
    </div>

  )
}

export default ItemDetail;