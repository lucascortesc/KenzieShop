import { Container } from "./styles";
import { Card } from "../Card";
import { useProducts } from "../../Providers/Products";

export const CardList = () => {
  const { products } = useProducts();

  return (
    <Container>
      {products.map((produto) => (
        <Card key={produto.name} produto={produto} />
      ))}
    </Container>
  );
};
