import React, { useMemo, useState, createContext, useEffect} from "react";

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image_dish:string
  category: string
}

interface CartContextProps {
  cartItems: CartItem[]
  addItemToCart: (item: CartItem) => void
  removeItemFromCart: (item: CartItem) => void
  sumQuantity: number
}


export const CartContext = createContext({} as CartContextProps)

export function CartProvider({children}: {children: React.ReactNode}){
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('@foodexplorer:cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  const addItemToCart = (item: CartItem) => {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.id === item.id
      )
      if (itemIndex !== -1){
        const updatedCart = [...prevState]
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: item.quantity
        }
        return updatedCart
      }
      return [...prevState, item]
    })
  }

  const removeItemFromCart = (item: CartItem) => {
    setCartItems( (prevItems) => 
      prevItems.filter(product => item.id !== product.id)
    )
  }

  const sumQuantity = useMemo(() => { 
    return cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cartItems))
  }, [cartItems])
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        sumQuantity
      }}
    >
      {children}
    </CartContext.Provider>

  )
}