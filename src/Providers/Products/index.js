import { createContext, useContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const products = [
    {
      name: "God of War",
      price: 99.9,
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png?w=440&thumb=false",
    },
    {
      name: "The Last of Us Part II",
      price: 199.9,
      image:
        "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png?w=440&thumb=false",
    },
    {
      name: "Returnal",
      price: 350,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png?w=440&thumb=false",
    },
    {
      name: "Assassin's Creed: Valhalla",
      price: 149.9,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202111/1609/pnLGNYoTTXuWT9if0Cb7Masg.png?w=440&thumb=false",
    },
  ];

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
