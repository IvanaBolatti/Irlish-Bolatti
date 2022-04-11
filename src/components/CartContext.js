
import { createContext,useState } from 'react'


export const CartContext =createContext ()
  
export const CartProvider=({children } )=>{

  const [cart,setCart]=useState([])

  const addItem=(item)=>{
    setCart([...cart,item])
  }
 
  const isInCart= (id)=>{
    return cart.some(prod=>prod.id===id)
  }

  const cantQuantity=()=>{
 return cart.reduce((acc,prod)=>acc+=prod.cantidad,0)
  }

  const cartTotal=()=>{
    return cart.reduce((total,prod)=>total+=prod.precio * prod.cantidad,0)
  }

  const emtyCart=()=>{
      return (
setCart([])
      )
  }

  const remuveItem=(id)=>{
      return(
  setCart(cart.filter((prod)=>prod.id !==id))
      )
  }

    return(
        <CartContext.Provider
value={{
    cart,
    addItem,
    isInCart,
    cantQuantity,
    cartTotal,
    emtyCart,
    remuveItem,
    
    }}>
        {children}
        </CartContext.Provider>
    )
}
