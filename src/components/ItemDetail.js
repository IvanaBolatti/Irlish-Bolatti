import React from 'react'

const ItemDetail = ({productDetail}) => {
    const {nombre, descrip, imagen}=productDetail
  return (
    <div>
        <h2>Detalle del producto: {nombre}</h2>
        <img src={imagen} alt={nombre}/>
        <p>{descrip}</p>
    </div>
  )
}

export default ItemDetail