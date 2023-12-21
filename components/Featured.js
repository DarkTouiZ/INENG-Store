import React from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import { useRouter } from 'next/router';

const Bg = styled.div`
  background-color: #fff;
  color: #383838;
  padding: 40px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 0.8fr;
  gap: 40px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  padding: 40px 0;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
`;

const FeaturedWrapper = styled.div`
    align-items: center;
    justify-content: center;
    margin: 30px 0;
`;
export default function Featured() {
  const router = useRouter();

  const handleBuyNow = () => {
    // Perform any additional logic before navigating to the cart page
    // For now, let's just navigate to the '/cart' route
    router.push('https://product-details-ca6b0.web.app/');
  };
  return (
    <Bg>
      <Center>
        <h1>Best Seller</h1>
        <Wrapper>
          <div>
            <img src="/Assets/StarWars/STARWARSLogoFront.png" alt="STAR WARS shirt"/>
          </div>
          <div>
            <img src="/Assets/StarWars/DarthVaderFront.png" alt="STAR WARS shirt" />
          </div>
          <div>
            <img src="/Assets/StarWars/SpaceshipFront.png" alt="STAR WARS shirt" />
          </div>
        </Wrapper>
        <ButtonWrapper>
          <Button onClick={handleBuyNow} primary>Buy Now</Button>
        </ButtonWrapper>
        
        
        <FeaturedWrapper >
          <Title>Featured</Title>
          <Desc>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, nisl nec ultrices tincidunt, massa nisl eleifend eros, vel
            luctus eros lorem sit amet diam. Nulla facilisi. Sed ut nunc eget
            magna tincidunt ullamcorper. Cras sed nunc vel magna tempor
            fermentum. Donec auctor, nunc eget ultricies ullamcorper, diam felis
            mollis nisi, non aliquam eros neque vel nunc. Donec aliquet, magna
            nec fermentum tincidunt, libero urna aliquet lorem, ut faucibus eros
            eros non lectus. Sed aliquam, nunc eget ultricies ullamcorper, diam
            felis mollis nisi,
          </Desc>
        </FeaturedWrapper>

        <img src="HolidayPic.svg" alt="Promotion" />
        <img src="BlackFriday.svg" alt="Promotion" />
        
      </Center>
    </Bg>
  );
}
