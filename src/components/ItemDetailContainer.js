import React, { useEffect,useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import db from './firebase/firebase';
import {doc,getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {

const [item,setItem]=useState(null);
const [cargando,setCargando]=useState(true)
const {itemId}=useParams() 

useEffect(()=> { 
  setCargando(true)
  
  const docRef=doc(db,"character",itemId)

  getDoc(docRef).then(doc=>{
       
       setItem({id: doc.id, ...doc.data()}) 
      
})

.finally(()=>{
 setCargando(false)
}
)
},[itemId])

 return (
    <div>
       {cargando ? <p>cargando...</p> : <ItemDetail {...item} />}
    </div>
  )

 }
export default ItemDetailContainer;
