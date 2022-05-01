import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList  from './ItemList';
import useProductos from './useProductos';


const ItemListContainer=()=>{
  
 
  const{categoryId}=useParams()
  const {cargando,listaProductos}=useProductos (categoryId)
 
 
return (
  <div>
    {
    cargando ? <p>Cargando...</p>: <ItemList listaProductos={listaProductos} /> 
    }
    
  </div>
)

}
export default ItemListContainer;

    
      

