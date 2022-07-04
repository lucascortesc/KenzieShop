import { Container } from "./styles";
import { CardCart } from "../../components/CardCart";
import { Total } from "../../components/Total";
import { useCart } from "../../Providers/Cart";

export const Cart = () => {
  const { cart } = useCart();

  return (
    <Container>
      {cart.length > 0 ? (
        cart.map((produto) => <CardCart produto={produto} key={produto.name} />)
      ) : (
        <h1>Carrinho vazio!</h1>
      )}
      {cart.length > 0 ? <Total /> : null}
    </Container>
  );
};
