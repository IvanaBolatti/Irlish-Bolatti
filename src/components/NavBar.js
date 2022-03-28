import React from 'react';
import Cart from './Cart';
import './App.css';

const NavBar=() =>{ 
  return(
  <>
  <h1 className='titulo'>TASCHEM</h1>
  <p className="p">Productos Químicos</p>
  <ul class="nav">
  <Cart className="Cart"/>
  <li className="nav-item">
    <a className="nav-link act inicio" aria-current="page" href="#">Inicio</a>
  </li>
  <li className="nav-item">
    <a class="nav-link somos" href="#">Quiénes somos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link productos" href="#">Productos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link contacto">Contacto</a>
  </li>
</ul>
  </>
  )
  } 
 
  export default NavBar;

