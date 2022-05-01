
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';




const Item=({producto}) =>{
 
  return(
 <div className="col-sm-4  "style={{width:"18rem", marginTop:"5%"} } >
   <div className="card bg-light text-dark" style={{marginBottom:"10%", marginLeft:"20%" } }>
       <img src={producto.imagen} className="img rounded "  alt="Productos"/>
       <div className="card-body"  >
          <h5 className="card-title" >{producto.nombre}</h5>
          <p className="card-text">{producto.category}</p>
          <Link to={`/detail/${producto.id}`}> <button className="btn mx-5 boton"> Ver más </button></Link>
       </div>
    </div>  
    </div>
  );
};

export default Item;

