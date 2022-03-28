import React, { useEffect,useState } from 'react'
import { getProductos } from './mocks/FakeApi';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
const [productDetail,setProductDetail]=useState({});
const [cargando,setCargando]=useState(false)
  
useEffect(()=> { 
  setCargando(true)
  
  getProductos
  .then((res)=>setProductDetail(res.find((item)=>item.id==='1')))
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
