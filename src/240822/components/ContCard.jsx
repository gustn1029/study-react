import React, { useEffect } from "react";
import { useState } from "react";

export function ProductImage({ src, alt }) {
  return <img src={src} alt={alt} />;
}

export function ProductTitle({ children }) {
  return <h2>{children}</h2>;
}

export function ProductSubTitle({ children }) {
  return <h3>{children}</h3>;
}

export function ProductDescription({ children }) {
  return <p>{children}</p>;
}

export function ProductPrice({ price, country }) {
  const [currentPrice, setCurrentPrice] = useState("");

  useEffect(() => {
    const dollarExchangeRate = 1336.6;
    const yenExchangeRate = 9;
    const yuanExchangeRate = 187.48;
    const dollors = price / dollarExchangeRate;
    const yen = price / yenExchangeRate;
    const yuan = price / yuanExchangeRate;

    function FormmaterPrice(price) {
        let formmatedPrice = parseFloat(price.toFixed(2)); 
        return formmatedPrice.toLocaleString()
    }
    switch (country) {
      case "america":
        setCurrentPrice(
          `${FormmaterPrice(dollors)} 달러`
        );
        break;
      case "japen":
        setCurrentPrice(`${FormmaterPrice(yen)} 엔`);
        break;
      case "china":
        setCurrentPrice(`${FormmaterPrice(yuan)} 위안`);
        break;

      default:
        setCurrentPrice(`${price.toLocaleString()} 원`);
        break;
    }
  }, [country, price]);
  return <p>{currentPrice}</p>;
}

export default function ContCard({ children }) {
  return <article>{children}</article>;
}
