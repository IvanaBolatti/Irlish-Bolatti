import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useState } from 'react';
import db from './firebase/firebase';
import { writeBatch,where, getDocs, collection,addDoc,Timestamp, query, documentId } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';


export const useForm=(initialForm,validarForm)=>{
    const [ordenId,setOrdenId] = useState(null);
    const [stock,setStock] = useState(true);
    const[formu,setFormu]=useState(initialForm);
    const[error,setError]=useState({});
    const[cargando,setCargando]=useState(false);

    const {cart,cartTotal,emtyCart} = useContext(CartContext)
   


    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormu({
            ...formu,
            [name]:value,
        })
        }
    
    const handleBlur=(e)=>{
        handleChange(e)
        setError(validarForm(formu))
        
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        setError(validarForm(formu))
       
          
        const orden = {
            items:cart,
            total:cartTotal(),
            comprador: {...formu},
            fyh: Timestamp.fromDate(new Date())
        }

        const batch=writeBatch(db)
        const ordenRef=collection(db,'orden')
        const productoRef= collection(db,'producto')
        const q=query(productoRef,where (documentId(),'in',cart.map((item)=>item.id)))
        
        const productos= await getDocs(q)
        
        const outOfStock=[]
  
        productos.docs.forEach((doc)=>{

        const itemInCart= cart.find((item)=>item.id===doc.id)
        if (doc.data().stock >= itemInCart.cantidad){
        batch.update(doc.ref,{
          stock: doc.data().stock - itemInCart.cantidad
    
        })
        }
         else {
           outOfStock.push(itemInCart)
         }
         
        })

        if (outOfStock.length===0){
          batch.commit()
          addDoc(ordenRef, orden)
          .then((doc)=>{ 
           setOrdenId(doc.id)
           emtyCart()
           setCargando(true)
           
           })
           
        } else {
          setStock(false)
        }
  
     }

    return{
         formu,
         error, 
         cargando,  
         ordenId,
         stock,
         handleChange, 
         handleBlur, 
         handleSubmit
        
     }
}


