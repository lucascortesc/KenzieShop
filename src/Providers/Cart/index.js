import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addProduct = (product) => {
    const newCart = [...cart, product];

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeProduct = (produto) => {
    console.log(produto);
    const newCart = cart.filter(({ name }) => name !== produto.name);

    setCart(newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
