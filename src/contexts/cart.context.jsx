
import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItems.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem)
    }
    else{
        return [...cartItems, { ...productToAdd, quantity: 1 }]
    }

}

export const CartContext = createContext({
    isCartOpen: false,
    setCartIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    //a function that triggers when a customer clicks on add to cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems}

    return (
        <CartContext.Provider value={value}>{children} </CartContext.Provider>
    )
}

