import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

const stock=10;
const initial=0;
const onAdd=(contador)=>{
console.log("Click", {contador});
};
const App = (
  <>
    <NavBar/>
    <ItemListContainer/>
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
  </>
  )

ReactDOM.render(
  App,
  document.getElementById('root')
);


