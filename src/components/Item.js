
import React from 'react';
import './App.css';


const Item=({producto}) =>{
  return(
    <div class="row row-cols-1 row-cols-md-3 g-4">
       <div class="col"></div>
    <div className="card ">
       <img src={producto.imagen} className="card-img-top"  alt="Cerveza con apariencia rica"/>
       <div className="card-body"  >
          <h5 className="card-title" >{producto.nombre}</h5>
          <p className="card-text">{producto.descrip}</p>
          <a href="#" class="btn btn-secondary">La quiero</a>
       </div>
    </div>
  </div>
  );
};

export default Item;

