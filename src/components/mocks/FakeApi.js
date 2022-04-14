import pigmentos from '../pigmentos.jpg';
import colorantes from '../colorantes.jpg';
import dispersiones from '../dispersiones.jpg';
import varios from '../varios.jpg';

export const infoProductos=[
    {
      id:'0',
      nombre:'Amarillo 1',
      category:'pigmentos',
      precio:50,
      descripcion:'Amarillo 1 (Hansa G - Rojizo) Bolsa x 25 kilos CHINA',
      imagen:pigmentos,
      stock: 40,
    },
    {
      id:'1',
      nombre:'Ácido rojo',
      category:'colorantes',
      precio: 70,
      descripcion:'Acid Red 1 Cuñete x 25 kg CHINA / INDIA',
      imagen:colorantes,
      stock: 0,
      
    },
    {
      id:'2',
      nombre:'Acuosa amarilla',
      category:'dispersiones',
      precio:45,
      descripcion:'Disp.Acuosa Amarillo 74 OPACO (2GX)Balde x 20 kg Disp 50,00% ARGENTINA ',
      imagen:dispersiones,
      stock: 40,
    },
    {
      id:'3',
      nombre:'Concentrado',
      category:'varios',
      precio: 80,
      descripcion:'Conc.Negro para Espuma PU Balde x 18 kg 100,00% ARGENTINA',
      imagen:varios, 
      stock: 40,
    },
    {
      id:'4',
      nombre:'Azul',
      category:'pigmentos',
      precio: 50,
      descripcion:'Azul Ftalo 15:0 (Rojizo - Agua)Bolsa x 20 kilos INDIA',
      imagen: dispersiones,
      stock: 40,
    },
    {
      id:'5',
      nombre:'Pigmento azul',
      category:'pigmentos',
      precio:40,
      descripcion:'Naranja 5 Permanente Bolsa x 25 kilos CHINA',
      imagen:varios,
      stock: 40,
    },
    {
      id:'6',
      nombre:'Violeta de Metilo',
      category:'colorantes',
      precio:70,
      descripcion:'Basic Violet 1 (Violeta de Metilo) Cuñete x 25 kg CHINA / INDIA',
      imagen:colorantes,
      stock: 40,
    },
    {
      id:'7',
      nombre:'Ácido verde',
      category:'colorantes',
      precio:65, 
      descripción:'Acid Green 16 (VUL - ARIEL) Cuñete x 25 kg CHINA / INDIA',
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