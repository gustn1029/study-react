import React from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./Cart";
import { CartProvider } from "../../context/CartProvider";
import Header from "./Header";

export default function Shopping() {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductList />
        <ShoppingCart />
      </CartProvider>
    </>
  );
}
