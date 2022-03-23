import React, { useEffect, useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import beer1 from './beer1.png';
import beer2 from './beer2.png';
import beer3 from './beer3.png';
import beer4 from './beer4.png';

const ItemListContainer=()=>{
  const[ListaProductos,setListaProductos]=useState([]);
  const InfoProductos=[
    {
      nombre:'La más rica',
      descrip:'Es la cerveza menos tostada y con menor cantidad de lúpulo, con la intención de dar lugar a una cerveza amarilla y muy ligera.',
      imagen:beer1,
    },
    {
      nombre:'La rubia',
      descrip:'Se caracterizan por su punto afrutado, su color claro -de ahí que se las llame "rubias", y su turbidez, debida a la malta suavee irresistible de trigo.',
      imagen:beer2,
    },
    {
      nombre:'La morocha',
      descrip:'Las cervezas de cebada se elaboran con cebada malteada, que les confiere mayor amargor potencia y frescura. No te quedes sin tu moricha.',
      imagen:beer3,
    },
    {
      nombre:'La más suave',
      descrip:'Las lager se consiguen con una fermentación a baja temperatura, que da unas cervezas más suaves, y que deben conservarse tras la fermentación durante al menos tres meses en contenedores.',
      imagen:beer4, 
    }
     ];
    

    const getProductos=new Promise((resolve,reject)=>{
      let condition=true
      if (condition){
        setTimeout(()=>{
          resolve(InfoProductos)
        },2000 )
      } else {
          reject('Error')
      }
    })

   useEffect(()=>{
     getProductos
     .then((res)=>setListaProductos(res))
     .catch((error)=> console.log("Error") )
   },[])

  console.log (ListaProductos);


return (
  <div>
    <ItemList ListaProductos={ListaProductos} />
  </div>
)

}
export default ItemListContainer;

    
      

