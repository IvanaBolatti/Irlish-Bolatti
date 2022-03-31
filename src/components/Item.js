
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Productos from './Productos';


const Item=({producto}) =>{
  return(
  
   <div className="card">
       <img src={producto.imagen} className="card-img-top"  alt="Productos"/>
       <div className="card-body"  >
          <h5 className="card-title" >{producto.nombre}</h5>
          <p className="card-text">{producto.category}</p>
          <Link to={`itemId/${producto.id}`}> <button className="btn btn-primary boton"> Ver más </button></Link>
       </div>
       </div>  
  );
};

export default Item;
