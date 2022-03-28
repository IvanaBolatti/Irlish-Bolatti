import pigmentos from '../pigmentos.jpg';
import colorantes from '../colorantes.jpg';
import dispersiones from '../dispersiones.jpg';
import varios from '../varios.jpg';

const infoProductos=[
    {
      id:'0',
      nombre:'Pigmentos',
      descrip:'Pigmentos',
      imagen:pigmentos,
    },
    {
      id:'1',
      nombre:'Colorantes',
      descrip:'Colorantes',
      imagen:colorantes,
    },
    {
      id:'2',
      nombre:'Dispersiones',
      descrip:'Dispersiones',
      imagen:dispersiones,
    },
    {
      id:'3',
      nombre:'Varios',
      descrip:'Varios',
      imagen:varios, 
    }
     ];
    

    export const getProductos=new Promise((resolve,reject)=>{
      let condition=true
      if (condition){
        setTimeout(()=>{
          resolve(infoProductos)
        },2000 )
      } else {
          reject('Error')
      }
    })