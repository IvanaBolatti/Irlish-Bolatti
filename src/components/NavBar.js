import React from 'react';
import Cart from './Cart';
import './App.css';

const NavBar=() =>{ 
  return(
  <>
  <h1 className='titulo' style={{color:`blue`}}>Cerveza Irlish</h1>
  <p className="p">Cerveza artesanal</p>
  <ul class="nav">
  <Cart className="Cart"/>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>
  <li className="nav-item">
    <a class="nav-link" href="#">¿Quiénes somos?</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Cervezas</a>
  </li>
  <li className="nav-item">
    <a className="nav-link">Contactanos</a>
  </li>
</ul>
  </>
  )
  } 
 
  export default NavBar;
