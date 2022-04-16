import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList  from './ItemList';
import db from './firebase/firebase';
import {collection,getDocs,query,where} from 'firebase/firestore';

const ItemListContainer=()=>{
  const[listaProductos,setListaProductos]=useState([]);
  const[cargando, setCargando]=useState(false)
  
  const{categoryId}=useParams()
 console.log(categoryId);

   useEffect(()=>{
     setCargando(true)

     const producRef=collection(db,"producto")
     const q=categoryId ? query(producRef, where('category','==',categoryId)) : producRef
     getDocs(q)
     .then(resp=>{
       const items=resp.docs.map((doc)=>({id: doc.id, ...doc.data()}))
       setListaProductos(items) 
     })
     .finally(()=>{
      setCargando(false)
     }
     )

   },[categoryId])
 
return (
  <div>
    {
    cargando ? <p>Cargando...</p>: <ItemList listaProductos={listaProductos} /> 
    }
    
  </div>
)

}
export default ItemListContainer;

    
      

