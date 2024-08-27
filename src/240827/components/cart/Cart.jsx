import React, { useContext } from "react";
import { Cart } from "../../context/CartProvider";

export default function ShoppingCart() {
    const { data, setCartItem } = useContext(Cart);

  const cartRemoveHandler = (id) => {
    setCartItem((prevCartItem) => prevCartItem.filter((el) => el.id !== id));
  };

  return (
    <>
      <h3>장바구니</h3>
      {data.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {data.map((el) => (
            <li key={`${el.id}__${el.name}`}>
              <h4>{el.name}</h4>
              <p>수량: {el.quantity}</p>
              <button onClick={() => cartRemoveHandler(el.id, el)}>제거</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
