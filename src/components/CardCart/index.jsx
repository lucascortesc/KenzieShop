import { Container } from "./styles";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../../Providers/Cart";

export const CardCart = ({ produto }) => {
  const { removeProduct } = useCart();

  const handleRemoveProduct = () => {
    removeProduct(produto);
    toast.success("Item removido com sucesso!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <Container>
      <div>
        <Toaster position="top-right" />
      </div>
      <img src={`${produto.image}`} alt={`${produto.name}`} />
      <h1>{produto.name}</h1>
      <h1>
        R$ {produto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </h1>
      <p onClick={() => handleRemoveProduct()}>Remover</p>
    </Container>
  );
};
