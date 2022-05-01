import React from 'react';
import Cart from './Cart';
import './App.css';
import { Link } from 'react-router-dom';
import CartwidGet from './CartwidGet';

const NavBar=() =>{ 
  return(
  <>
  <header>
   <nav className='nav'>
  <div className="espacioNavLogo">
   <Link to="/" style={ {textDecoration: "none"} }><h1 className='titulo'>TASCHEM</h1></Link>
   <h3 className="h3">Productos Químicos</h3>
   </div>
   <div className="espacioNavBar">
  
   <Link className="nav-link p" to="/producto">Productos</Link>
 
 <Link className="nav-link p" to="/nosotros">Nosotros</Link>

  <Link className="nav-link p" to="/contacto" >Contacto</Link>
  
  <CartwidGet className="cartwidGet"/>

  </div>
  
  <div className="espacioProductos">
  <div className="row">
    <div className="col colorante">
    <Link className="nav-link productos m-2 p-0" to="/category/colorantes">Colorante</Link>
    </div>
    <div className="col pigmento">
    <Link className="nav-link productos m-2 p-0 " to="/category/pigmentos">Pigmento</Link>
    </div>
    <div className="col dispersion">
    <Link className="nav-link  productos m-2 p-0" to="/category/dispersiones" >Dispersión</Link>
    </div>
    <div className="col varios">
    <Link className="nav-link  productos m-2 p-0" to="/category/varios" >Varios</Link>
    </div>
   
    </div>
    </div>
  
   </nav>
   </header>
   </>
  )
  } 
 
  export default NavBar;

