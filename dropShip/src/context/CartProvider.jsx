import { CartContext } from "./CartContext.jsx";
import { useState, useEffect } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
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
  }

  function removeFromCart(item) {
    setCart(cart.filter((product) => item.id !== product.id));
    console.log(cart);
  }

  function increaseQuantity(item) {
    setCart(
      cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function decreaseQuantity(item) {
    setCart(
      cart.map((product) =>
        item.id === product.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  useEffect(() => {
    console.log(cart);
    console.log(cart.length);
    const total = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartQuantity(total);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
