import React from 'react';
import Cart from './Cart';
import './App.css';
import { Link } from 'react-router-dom';

const NavBar=() =>{ 
  return(
  <>
  <h1 className='titulo'>TASCHEM</h1>
  <p className="p">Productos Químicos</p>
  <header>
  <Link to="/"></Link> <Cart className="Cart"/>
   <nav className='nav'>
 
    <Link className="nav-link productos" to="/">Productos</Link>
 
    <Link className="nav-link nosotros" to="/nosotros">Nosotros</Link>

    <Link className="nav-link contacto" to="/contacto" >Contacto</Link>
 
   </nav>
   </header>
   </>
  )
  } 
 
  export default NavBar;

