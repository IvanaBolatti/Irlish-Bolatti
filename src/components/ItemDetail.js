import React from "react";
import Productos from './Productos';

const ItemDetail=({id,nombre,category,precio})=>{
    return(
      
       <div className="d-flex flex-wrap justify-content-between" >
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col"></div>
     <h2>{nombre}</h2>
     <h2>{category}</h2>
     <h2>Precio: {precio} </h2>
            
       </div>
       </div>
    )
}

export default ItemDetail;