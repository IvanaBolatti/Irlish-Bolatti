import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import ItemList from './ItemList';
import { getProductos } from './mocks/FakeApi';

const ItemListContainer=()=>{
  const[listaProductos,setListaProductos]=useState([]);
  const[cargando, setCargando]=useState(false)
  
  const{categoryId}=useParams()
 console.log(categoryId);

   useEffect(()=>{
     setCargando(true)

     getProductos
     .then((res)=>{ 
     if (categoryId) {
      setListaProductos(res.filter((prod)=>prod.category===categoryId))
     }
     else {
      setListaProductos(res)
     }
      })
     .catch((error)=> console.log("Error") )
    
     .finally(()=>setCargando(false));
   },[categoryId])
  
return (
  <div>
    {cargando ? <p>Cargando...</p>: <ItemList listaProductos={listaProductos} /> }
   
  </div>
)

}
export default ItemListContainer;

    
      

