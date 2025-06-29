import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Cart() {
  const { cart } = useContext(CartContext);

  return <div className="pt-20">This is a cart page</div>;
}

export default Cart;
