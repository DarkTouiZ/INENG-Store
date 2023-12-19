// NewArrival.js
import styled from "styled-components";
import Center from "./Center";
import Card from "./Card";
import { product } from "../Content/Product";

const Bg = styled.div`
  background-color: #fff;
  color: #383838;
  padding: 100px 0;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  padding: 40px 0;
  margin: 0 0 40px 0;
`;

const Desc = styled.p`
  color: #686868;
  font-size: 1rem;
  margin: 0;
`;

export default function NewArrival() {
  const newProducts = product.slice(0, 3);
  return (
    <Bg>
      <Center>
        <h1>New Arrival</h1>
        <ProductGrid>
          {newProducts.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.images?.frontView?.[0] || "../Asset/Formal/BkFront.jpg"}
              color="#FF0000"
              description={product.description}
            />
          ))}
        </ProductGrid>
      </Center>
    </Bg>
  );
}
