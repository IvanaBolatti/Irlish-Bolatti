import { useEffect,useState } from "react"
import { where, getDocs, collection, query} from 'firebase/firestore';
import db from './firebase/firebase';

  

const useProductos=(categoryId=null)=>{
    const [listaProductos,setListaProductos]=useState(null)
    const[cargando, setCargando]=useState(true)

    useEffect(()=>{
        setCargando(true)

        const producRef=collection(db,"producto")
        const q=categoryId ? query(producRef, where('category','==',categoryId)) : producRef
        getDocs(q)
        .then(resp=>{
          const items=resp.docs.map((doc)=>({id: doc.id, ...doc.data()}))
          setListaProductos(items) 
        })
        .finally(()=>{
         setCargando(false)
        }
        )
    }, [categoryId])

return {
listaProductos,cargando
 }
}
export default useProductos