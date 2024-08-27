import { createContext, useState } from "react";

const products = [
  { id: 1, name: "노트북", price: 1000 },
  { id: 2, name: "스마트폰", price: 500 },
  { id: 3, name: "태블릿", price: 300 },
];

export const Products = createContext({ data: products });
export const Cart = createContext({ data: [], setCartItem: () => {} });

export function CartProvider({ children }) {
    const [cartData, setCartData] = useState([]);
    
    return (
      <Cart.Provider value={{ data: cartData, setCartItem: setCartData }}>
        {children}
      </Cart.Provider>
    );
  }