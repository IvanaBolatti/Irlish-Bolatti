import pigmentos from '../pigmentos.jpg';
import colorantes from '../colorantes.jpg';
import dispersiones from '../dispersiones.jpg';
import varios from '../varios.jpg';

const infoProductos=[
    {
      id:'0',
      nombre:'Pigmento rojo',
      category:'pigmentos',
      precio:50,
      descripcion:'dsdsdsdsdsdsdsd',
      imagen:pigmentos,
      stock: 40,
    },
    {
      id:'1',
      nombre:'Colorante verde',
      category:'colorantes',
      precio: 70,
      descripcion:'dsdsdsdsdsdsdsd',
      imagen:colorantes,
      stock: 40,
      
    },
    {
      id:'2',
      nombre:'Dispersión ocre',
      category:'dispersiones',
      precio:45,
      descripcion:'dsdsdsdsdsdsdsd',
      imagen:dispersiones,
      stock: 40,
    },
    {
      id:'3',
      nombre:'Polvo',
      category:'varios',
      precio: 80,
      descripcion:'dsdsdsdsdsdsdsd',
      imagen:varios, 
      stock: 40,
    },
    {
      id:'4',
      nombre:'Pigmento amarillo',
      category:'pigmentos',
      precio: 50,
      descripcion:'dsdsdsdsdsdsdsd',
      imagen: dispersiones,
      stock: 40,
    },
    {
      id:'5',
      nombre:'Pigmento azul',
      category:'pigmentos',
      precio:40,
      descripcion:'dsdsdsdsdsdsdsd',
      imagen:varios,
      stock: 40,
    },
    {
      id:'6',
      nombre:'Colorante rojo',
      category:'colorantes',
      precio:70,
      descripcion:'dsdsdsdsdsdsdsd',
      imagen:colorantes,
      stock: 40,
    },
    {
      id:'7',
      nombre:'Colorante verde',
      category:'colorantes',
      precio:65, 
      descripción:'dsdsdsdsdsdsdsd',
      imagen: pigmentos,
      stock: 40,
    },
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