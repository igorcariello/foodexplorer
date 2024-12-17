import React, { useMemo, useState, createContext} from "react";

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
  addItemToCart: (item: CartItem | CartItem[]) => void
  removeItemFromCart: (itemId: number) => void
  sumQuantity: number
}


export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  sumQuantity: 0
})

export function CartProvider({children}: {children: React.ReactNode}){
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addItemToCart = (item: CartItem | CartItem[]) => {
    if(Array.isArray(item)) {
      setCartItems(item)
    }else {
      setCartItems((prevItems) => {
        const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
        if (itemExists) {
          return prevItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: item.quantity } : cartItem
          );
        } else {
          return [...prevItems, item];
        }
      });
    }
  };

  const removeItemFromCart = (itemId: number) => {
    setCartItems( (prevItems) => prevItems.filter(item => item.id !== itemId))
  }

  const sumQuantity = useMemo(() => { 
    return cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
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