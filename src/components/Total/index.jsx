import { useCart } from "../../Providers/Cart";
import { Container } from "./style";

export const Total = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, { price }) => acc + price, 0);

  return (
    <Container>
      <h1>Total : </h1>
      <h1>R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</h1>
    </Container>
  );
};
