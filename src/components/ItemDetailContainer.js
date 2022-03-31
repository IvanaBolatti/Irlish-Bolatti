import React, { useEffect,useState } from 'react'
import { getProductos } from './mocks/FakeApi';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
const [productDetail,setProductDetail]=useState(null);
const [cargando,setCargando]=useState(false)
const {itemId}=useParams() 
console.log(itemId)
useEffect(()=> { 
  setCargando(true)
  
  getProductos
  .then((res)=>setProductDetail(res.find((item)=>item.id===itemId)))
  .catch((error)=>console.log("Error"))
  .finally(()=>setCargando(false))
},[])
 console.log (productDetail)
  return (
    <div>
       {cargando ? <p>cargando...</p> : <ItemDetail productDetail={productDetail}/> }
    </div>
    
  )
}

export default ItemDetailContainer;
