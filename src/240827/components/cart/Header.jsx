import React, { useContext, useEffect, useRef } from "react";
import { Cart } from "../../context/CartProvider";

export default function Header() {
  const { data: cartData } = useContext(Cart);
  let total = useRef(0);

  useEffect(() => {
    total.current = cartData.reduce((acc, item) => acc + item.quantity, 1);
  }, [cartData]);
  return (
    <header>
      <h2>쇼핑몰</h2>
      <p>카드에 있는 상품의 수량: {total.current}</p>
    </header>
  );
}
