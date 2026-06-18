import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}