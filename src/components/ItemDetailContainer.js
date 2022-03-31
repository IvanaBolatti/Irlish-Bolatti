import React, { useEffect,useState } from 'react'
import { getDetalleProductos } from './mocks/FakeDetalleProductos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
const [listaProductDetail,setListaProductDetail]=useState([]);
const [cargando,setCargando]=useState(false)
const {itemId}=useParams() 
console.log(itemId)

useEffect(()=> { 
  setCargando(true)
  
  getDetalleProductos
  .then((res)=>{
  if (itemId) {
    setListaProductDetail(res.find((item)=>item.id===itemId))
     }
     else {
      setListaProductDetail(res)
     }
      })
  .catch((error)=>console.log("Error"))
  .finally(()=>setCargando(false))
},[itemId])
 console.log (listaProductDetail)
  
 return (
    <div>
       {cargando ? <p>cargando...</p> : <ItemDetail {...listaProductDetail}/>}
    </div>
    
  )

 }
export default ItemDetailContainer;
