import React, { useEffect,useState } from 'react'
import { getProductos } from './mocks/FakeApi';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

const [item,setItem]=useState([]);
const [cargando,setCargando]=useState(false)
const {itemId}=useParams() 

useEffect(()=> { 
  setCargando(true)
  
  getProductos
  .then((res)=>{
  if (itemId) {
    setItem(res.find((producto)=>producto.id===itemId))
     }
     else {
      setItem(res)
     }
      })
  .catch((error)=>console.log("Error"))
  .finally(()=>setCargando(false))
},[itemId])

 return (
    <div>
       {cargando ? <p>cargando...</p> : <ItemDetail {...item} />}
    </div>
  )

 }
export default ItemDetailContainer;
