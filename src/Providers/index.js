import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CartProvider>
  );
};
