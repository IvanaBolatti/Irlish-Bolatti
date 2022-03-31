const detalleProductos=[
    {
      id:'0-1',
      nombre:'Pigmento amarillo',
      category:'pigmentos',
      precio: 50,
    },
    {
      id:'0-2',
      nombre:'Pigmento azul',
      category:'pigmentos',
      precio:40,
    },
    {
      id:'1-1',
      nombre:'Colorante rojo',
      category:'colorantes',
      precio:70,
    },
    {
      id:'1-2',
      nombre:'Colorante verde',
      category:'colorantes',
      precio:65, 
    },
    {
        id:'2-1',
        nombre:'Dispersiones negro',
        category:'dispersiones',
        precio:45,
      },
      {
        id:'2-2',
        nombre:'Dispersiones colores',
        category:'dispersiones',
        precio:78,
      },
      {
        id:'3-1',
        nombre:'tinta amarilla',
        category:'varios',
        precio:34,
      },
      {
        id:'3-2',
        nombre:'polvo rojo',
        category:'varios',
        precio:67, 
      }
     ];
    

    export const getDetalleProductos=new Promise((resolve,reject)=>{
      let condition=true
      if (condition){
        setTimeout(()=>{
          resolve(detalleProductos)
        },2000 )
      } else {
          reject('Error')
      }
    })