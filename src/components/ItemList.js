import React from "react";
import Item from './Item';

const ItemList=({listaProductos})=>{
   console.log(listaProductos)

    return(
        <div className="d-flex flex-wrap justify-content-between" >
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col"></div>
           {listaProductos.map((producto)=> <Item producto={producto} key={producto.id}/>)
            }
            
        </div>
        </div>
    )
}
export default ItemList;