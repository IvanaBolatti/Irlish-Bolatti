import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { useState } from 'react';
import db from './firebase/firebase';
import { collection,addDoc,Timestamp, getDoc, updateDoc, doc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const {cart,cartTotal,emtyCart} = useContext(CartContext)
    const [ordenId,setOrdenId]=useState(null)

    const [values, setValues]=useState ({
        nombre:'',
        email:'',
        tel: 0,
    })
    
    const handleImputChenge=(e)=>{
      setValues({
          ...values,
          [e.target.name]: e.target.value

          } ) 
     }

    const handleSubmit=(e)=>{
        e.preventDefault()

        const orden = {
            items:cart,
            total:cartTotal(),
            comprador: {...values },
            fyh: Timestamp.fromDate(new Date())
        }

       

       const ordenRef=collection(db,'orden')

       cart.forEach(item=> {
         const docRef= doc(db,"producto",item.id)
         getDoc(docRef)
         .then((doc)=>{
           if (doc.data().stock>=item.cantidad){
              updateDoc(docRef, {
              stock:doc.data().stock- item.cantidad
            })
           }
           else {
             alert("No hay stock del producto")
           }
           
         })
       });
   
        addDoc(ordenRef, orden)
         .then((doc)=>{
          
          setOrdenId(doc.id)
          emtyCart()
          })

    }

    if (ordenId) {
      return  <div className='container my-5'>
        <h2>Tu orden se registró exitosamente</h2>
        <hr/>
        <h4>Guarda tu número de orden, {ordenId}</h4>
        <Link to="/" className='btn btn-primary'>Volver al inicio</Link>
      </div>
      
    }

    if (cart.length===0){
      return <Navigate to= "/"/>
    }
   
  return (
    <div className='container my-5'>
      <h2>Checkout</h2>
      <hr/>

      <form onSubmit={handleSubmit}>
        <input className='form-control my-2'
        type={'text'} placeholder="Tu nombre" 
        value={values.nombre} name='nombre' 
        onChange={handleImputChenge}/>
        <input className='form-control my-2'
        type={'email'}placeholder="Tu email" 
        value={values.email}name='email'
        onChange={handleImputChenge} />
        <input className='form-control my-2'
        type={'tel'}placeholder="Tu teléfono"
        value={values.tel} name='tel' 
        onChange={handleImputChenge} />
        <button className="btn btn-primary" type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Checkout