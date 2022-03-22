import React, { useState } from 'react';
const ItemCount=({stock,initial,onAdd })=> {
    const[contador, setContador]=useState(initial);
 
const clickSum=()=>{ 
  
  if (contador===stock){
    return;
    }
    setContador(contador+1);
}

const clickRes=()=>{ 
   if (contador===initial){
       return;
   }
    setContador(contador-1);
   };

   const addTocart=()=>
  { onAdd(contador);

  }
   return(
     <div> 
     <h1 style={{textAlign: 'center'} }>{contador}</h1>
     <div style={
         {display: 'flex', 
         flexDirection: 'row', 
         justifyContent: 'center'
        }}> 

       <button onClick={()=>clickSum()}>Sumar 1</button>
       <button onClick={()=>clickRes()}>Restar 1</button>
     </div>
     <button onClick={()=>addTocart()}>Add</button>
     </div>
   );
  
   
  }
  export default ItemCount;