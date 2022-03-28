import React, { useEffect, useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import { getProductos } from './mocks/FakeApi';

const ItemListContainer=()=>{
  const[listaProductos,setListaProductos]=useState([]);
  const[cargando, setCargando]=useState(false)
  
 

   useEffect(()=>{
     setCargando(true)
     getProductos
     .then((res)=>setListaProductos(res))
     .catch((error)=> console.log("Error") )
     .finally(()=>setCargando(false));
   },[])

return (
  <div>
    {cargando ? <p>Cargando...</p>: <ItemList listaProductos={listaProductos} /> }
   
  </div>
)

}
export default ItemListContainer;

    
      

