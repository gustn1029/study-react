import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { add, minus } from "../store/reducer/goodsReducer";
import { sale, soldOut } from "../store/reducer/stockReducer";
import Message from "./Message";

const Details = () => {
  const { goods, stock, message } = useSelector(
    (state) => ({
      goods: state.goods.goods,
      stock: state.goods.stock,
      message: state.stock.message,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const addQuantity = () => dispatch(add());
  const minusQuantity = () => dispatch(minus());
  let price = 17500;

  useEffect(() => {
    if (stock !== 0) {
      dispatch(sale());
    } else {
      dispatch(soldOut());
    }
  }, [stock, dispatch]);

  return (
    <>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span>
        <strong>17,500</strong>원
      </span>
      <div id="counter-box">
        <button type="button" onClick={minusQuantity} disabled={goods <= 0}>
          MINUS
        </button>
        <span id="number">{goods}</span>
        <button type="button" onClick={addQuantity} disabled={stock === 0}>
          PLUS
        </button>
      </div>
      <div>
        총 수량 <strong id="quantity">{goods}</strong>
      </div>
      <div>
        <strong id="total">{(price * goods).toLocaleString()}</strong>원
      </div>
      <p>재고: {stock}</p>
      <Message message={message} />
    </>
  );
};

export default Details;
