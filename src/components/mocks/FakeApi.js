import pigmentos from '../pigmentos.jpg';
import colorantes from '../colorantes.jpg';
import dispersiones from '../dispersiones.jpg';
import varios from '../varios.jpg';

const infoProductos=[
    {
      id:'0',
      nombre:'Pigmentos',
      category:'pigmentos',
      imagen:pigmentos,
    },
    {
      id:'1',
      nombre:'Colorantes',
      category:'colorantes',
      imagen:colorantes,
    },
    {
      id:'2',
      nombre:'Dispersiones',
      category:'dispersiones',
      imagen:dispersiones,
    },
    {
      id:'3',
      nombre:'Varios',
      category:'varios',
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