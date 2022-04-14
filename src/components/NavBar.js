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
   <Link to="/"><h1 className='titulo'>TASCHEM</h1></Link>
   </div>
   <p className="p">Productos Químicos</p>
   <div className="espacioNavBar">
  
   <Link className="nav-link" to="/producto">Productos</Link>
 
 <Link className="nav-link" to="/nosotros">Nosotros</Link>

  <Link className="nav-link" to="/contacto" >Contacto</Link>


  <CartwidGet className="cartwidGet"/>
  </div>
  <div className='espacioNavBar'>
  
  <div className='espacioNav'>
  
    <Link className="nav-link colorante" to="/category/colorantes">Colorante</Link>
 
    <Link className="nav-link pigmento" to="/category/pigmentos">Pigmento</Link>

    <Link className="nav-link dispersion" to="/category/dispersiones" >Dispersión</Link>

    <Link className="nav-link varios" to="/category/varios" >Varios</Link>
    </div>
    </div>
   </nav>
   </header>
   </>
  )
  } 
 
  export default NavBar;

