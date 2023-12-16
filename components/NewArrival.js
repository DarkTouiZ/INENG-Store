import styled from "styled-components";
import Center from "./Center";

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
  return (
    <Bg>
      <Center>
        <h1>New Arrival</h1>
        <ProductGrid>
          <div>
            <img src="/Assets/Limited/BlackFront.jpg" alt="STAR WARS shirt" />
            <h1>Colors</h1>
            <h1>Sex</h1>
            <Desc>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              euismod, nisl nec ultrices tincidunt, massa nisl eleifend eros,
              vel luctus eros lorem sit amet diam. Nulla facilisi. Sed ut nunc
              eget magna tincidunt ullamcorper.
            </Desc>
            <p>See More</p>
          </div>
          <div>
            <img src="/Assets/Limited/BossFront.jpg" alt="STAR WARS shirt" />
            <h1>Colors</h1>
            <h1>Sex</h1>
            <Desc>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              euismod, nisl nec ultrices tincidunt, massa nisl eleifend eros,
              vel luctus eros lorem sit amet diam. Nulla facilisi. Sed ut nunc
              eget magna tincidunt ullamcorper.
            </Desc>
            <p>See More</p>
          </div>
          <div>
            <img src="/Assets/Limited/OrangeFront.jpg" alt="STAR WARS shirt" />
            <h1>Colors</h1>
            <h1>Sex</h1>
            <Desc>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              euismod, nisl nec ultrices tincidunt, massa nisl eleifend eros,
              vel luctus eros lorem sit amet diam. Nulla facilisi. Sed ut nunc
              eget magna tincidunt ullamcorper.
            </Desc>
            <p>See More</p>
          </div>
        </ProductGrid>
      </Center>
    </Bg>
  );
}
