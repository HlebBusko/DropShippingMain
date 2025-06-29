import { CartContext } from "./CartContext.jsx";
import { useState, useEffect } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
    setCartQuantity(cart.reduce((acc, item) => acc + item.quantity, 1));
  }

  useEffect(() => {
    console.log(cart);
    console.log(cart.length);
  }, [cart]);

  return (
    <div>
      <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartProvider;
