
import React from 'react';
import './App.css';


const Item=({producto}) =>{
  return(
  
   <div class="card">
       <img src={producto.imagen} className="card-img-top"  alt="Productos"/>
       <div className="card-body"  >
          <h5 className="card-title" >{producto.nombre}</h5>
          <p className="card-text">{producto.descrip}</p>
          <a href="#" class="btn btn-primary boton">Ver más</a>
       </div>
       </div>  
  );
};

export default Item;

