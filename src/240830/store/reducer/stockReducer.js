const initialState = {
  message: "판매 중!!",
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: "판매 중!!",
      };

    case "SOLD_OUT":
      return {
        ...state,
        message: "완판!!",
      };

    default:
      return state;
  }
};

export const sale = () => {
  return { type: "SALE" };
};

export const soldOut = () => {
  return { type: "SOLD_OUT" };
};
