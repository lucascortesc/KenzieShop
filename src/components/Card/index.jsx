import { Container } from "./styles";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../../Providers/Cart";

export const Card = ({ produto }) => {
  const { cart, addProduct } = useCart();

  const handleAddProduct = () => {
    if (cart.some(({ name }) => name === produto.name)) {
      toast.error("Item já existente no carrinho", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      addProduct(produto);
      toast.success("Item adicionado ao carrinho com sucesso!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <Container>
        <img src={`${produto.image}`} alt={`${produto.name}`} />
        <div className="info">
          <h1>{produto.name}</h1>
          <p>
            R${" "}
            {produto.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>
          <button onClick={() => handleAddProduct()}>
            Adicionar ao carrinho
          </button>
        </div>
      </Container>
    </>
  );
};
