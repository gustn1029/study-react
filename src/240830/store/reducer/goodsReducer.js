const initialState = {
  stock: 20,
  goods: 0,
};

export const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };

    case "MINUS":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default:
      return state;
  }
};

export const add = () => {
  return { type: "ADD" };
};

export const minus = () => {
  return { type: "MINUS" };
};
