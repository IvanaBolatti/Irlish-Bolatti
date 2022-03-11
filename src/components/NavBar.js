import React from 'react';
import ReactDOM from 'react-dom';

const NavBar=() =>{ 
  return(
  <>
  <h1 className='titulo' style={{color:`blue`}}>Cerveza Irlish</h1>
  <p>Cerveza artesanal</p>
  <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">¿Quiénes somos?</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Cervezas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link">Contactanos</a>
  </li>
</ul>
  </>
  )
  } 
  ReactDOM.render(
    NavBar,
    document.getElementById('root')
  );
  export default NavBar;
