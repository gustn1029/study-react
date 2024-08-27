import React, { useContext } from "react";
import { Cart, Products } from "../../context/CartProvider";

export default function ProductList() {
  const { data: products } = useContext(Products);
  const {setCartItem} = useContext(Cart);

  const cartAddHandler = (item) => {
    setCartItem((prevCartItem) => {
      const findItem = prevCartItem.find((el) => el.id === item.id);
      if (findItem) {
        return prevCartItem.map((el) =>
          el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
        );
      } else {
        return [...prevCartItem, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <h3>상품 목록</h3>
      <ul>
        {products.map((el) => (
          <li key={`${el.id}__${el.name}`}>
            <h4>{el.name}</h4>
            <data value={el.price}>￦{el.price.toLocaleString()}</data>
            <button onClick={() => cartAddHandler(el)}>카트에 추가</button>
          </li>
        ))}
      </ul>
    </>
  );
}
