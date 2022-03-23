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
     <div  className= "estiloDiv"> 
     <h1 style={{textAlign: 'center'} }>{contador}</h1>
     <div> 

       <button onClick={()=>clickSum()}>Sumar 1</button>
       <button onClick={()=>clickRes()}>Restar 1</button>
     </div>
     <button onClick={()=>addTocart()}>Add</button>
     </div>
   );
  
   
  }
  export default ItemCount;