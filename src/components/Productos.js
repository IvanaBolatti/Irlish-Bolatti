import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

const Productos=({producto}) =>{
  return(
  
   <div className="card">
      
       <div className="card-body"  >
          <h5 className="card-title" >{producto.nombre}</h5>
          <p className="card-text">{producto.category}</p>
          <Link to={`detail/${producto.id}`}> <button className="btn btn-primary boton"> Ver más </button></Link>
       </div>
       </div>  
  );
};

export default Productos