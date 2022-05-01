import './App.css';
import {useForm } from "./useForm"
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { validarForm } from './validarForm';
import { Link } from 'react-router-dom';

    
    const initialForm={
      name:'',
      email:'',
      confEmail:'',
      telefono:'',
      coment:''
    }

  

   const Checkout = () => {

    const {emtyCart} = useContext(CartContext)

    const{ 
      formu,
      error, 
      ordenId, 
      stock,
      handleChange, 
      handleBlur, 
      handleSubmit} =useForm(initialForm, validarForm) 
      
      if (ordenId!=null && stock===true) {
       
        return (
          <div className='container my-5' style={{backgroundColor: '#cdcbdb', marginTop:'5%' }}>
          <h2>Tu orden se registró exitosamente</h2>
          <hr/>
          <h4>Guarda tu número de orden, {ordenId}</h4>
          <hr/>
          <Link to={"/"} className="btn btn mx-3 boton" >Volver</Link>
          </div>
        ) } 
         
      
        if (stock===false){
  
          return (
            <div className='container my-5' style={{backgroundColor: '#cdcbdb', marginTop:'5%' }}>
            <h2>Tu orden no se pudo llevar a cabo</h2>
            <hr/>
            <h4>Producto sin stock</h4>
            <hr/>
            
            <Link to={"/"} className="btn btn mx-3 boton"onClick={()=>emtyCart() } >Volver</Link>
            </div>
            )
        }
  
       
        
    return (
      <div>
      <h2 style={{marginLeft: '8%', marginTop:'5%' }}>Formulario de Contacto</h2>
      <div className="col-sm-6" >
     <form style={{marginLeft: '8%'}} onSubmit={handleSubmit}>
        <input className='form-control my-2'
          type={'text'} 
          value={formu.name} 
          name='name'
          placeholder="Tu nombre" 
          onBlur={handleBlur}
          onChange={handleChange}
          required/>

         {error.name && <p className="error">{error.name}</p>}
  
       <input className='form-control my-2'
         type={'email'} 
         placeholder="Escribe tu email" 
         onBlur={handleBlur}
         value={formu.email} 
         name='email' 
         onChange={handleChange}
         required/>

       {error.email && <p className="error">{error.email}</p>}

       <input className='form-control my-2'
         type={'email'} 
         placeholder="Confirma tu email" 
         onBlur={handleBlur}
         value={formu.confEmail} 
         name='confEmail' 
         onChange={handleChange}
         required/>

       {error.confEmail && <p className="error" >{error.confEmail}</p>}
  
       <input className='form-control my-2'
         type={'text'} 
         placeholder="Teléfono" 
         onBlur={handleBlur}
         value={formu.telefono} 
         name='telefono' 
         onChange={handleChange}
         required/>

        {error.telefono && <p className="error" >{error.telefono}</p>}
  
  
      <textarea name="coment" cols="50" rows="5" placeholder="Escribe tu comentario"
        onBlur={handleBlur}
        value={formu.coment}  
        onChange={handleChange}
      />
      
       {error.coment && <p className="error" >{error.coment}</p>}
       <hr/>
       <input className=" btn boton" type="submit"  value="Enviar"/>
       
      </form>
      </div>

      
      </div>
    )
  }
  
export default Checkout