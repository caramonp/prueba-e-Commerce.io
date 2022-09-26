import React, { createContext, useState, useEffect } from "react";

interface CardProviderProps {
    children?: React.ReactNode
}

interface CartContextInterface {
    isCartOpen: boolean
    setIsCartOpen: Function,
    cartItems: any,
    setCartItems: Function,
    addItemToCart: Function,
    removeItemToCart: Function,
    clearItemFromCart: Function,
    cartCount: number,
    cartTotal: number
}

const addCartItem = (cartItems:any, productToAdd: Record<string, string | number>):any => {
    const existingCartItem = cartItems.find(
        (cartItem:{id:number}) => cartItem.id === productToAdd.id
      );
    
      if (existingCartItem) {
        return cartItems.map((cartItem:{id:number , quantity:number}) =>
          cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];

}
const removeCartItem = (cartItems:any, cartItemToRemove:any) => {

    const existingCartItem = cartItems.find(
      (cartItem:any) => cartItem.id === cartItemToRemove.id
    );
  

    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem:any) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem:any) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
  const clearCartItem = (cartItems:any, cartItemToClear:any) =>
    cartItems.filter((cartItem:any) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext<CartContextInterface>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    setCartItems: () => {},
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})

export const CartProvider = ({children}:CardProviderProps) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
          (total, cartItem:any) => total + cartItem.quantity,
          0
        );
        setCartCount(newCartCount);
      }, [cartItems]);

      useEffect(() => {
        const newCartTotal = cartItems.reduce(
          (total, cartItem:any) => total + cartItem.quantity * cartItem.price,
          0
        );
        setCartTotal(newCartTotal);
      }, [cartItems]);


    const addItemToCart = (productToAdd: any) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (cartItemToRemove: any) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
      };
    
      const clearItemFromCart = (cartItemToClear: any) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };

    const value:CartContextInterface = {
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        setCartItems,
        addItemToCart,
        removeItemToCart,
        clearItemFromCart,
        cartCount,
        cartTotal
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}