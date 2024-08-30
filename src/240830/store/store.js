import { combineReducers, createStore } from "redux";
import { goodsReducer } from "./reducer/goodsReducer";
import { stockReducer } from "./reducer/stockReducer";

export const rootReducer = combineReducers({
    goods: goodsReducer,
    stock: stockReducer
});

export const store = createStore(rootReducer);