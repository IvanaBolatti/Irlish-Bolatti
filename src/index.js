import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';

const stock=10;
const initial=0;
const onAdd=(contador)=>{
console.log("Click", {contador});
};
const App = (
  
    <BrowserRouter>
    
    <NavBar/>
    

   <div>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
    </div>
      <div style={
         {display: 'flex', 
         flexDirection: 'column', 
         justifyContent: 'center',
         width: '200px',
        }}> 
        
       
        <div style={
         {backgroundColor:' green', 
          width: '200px',
          height: '110px'
           }}>
          
          
          <ItemCount
          stock={stock}
          initial={initial}
          onAdd={onAdd}
          />
        </div>
      </div>
      </BrowserRouter>

  )

ReactDOM.render(
  App,
  document.getElementById('root')
);


