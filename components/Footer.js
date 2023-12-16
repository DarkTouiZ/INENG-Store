import styled from "styled-components";
import Center from "./Center";

const FooterBG = styled.div`
  background-color: #000;
  color: #fff;
  padding: 40px 0;
  margin: 40px 0 0 0;
`;

const FooterTitle = styled.h1`
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px 0;
`;

export default function Footer() {
  return (
    <FooterBG>
      <Center>
        <FooterTitle>
          <p>MATERIAL SPORTLIGHT</p>
          <p>Pure Comfort in Cotton <br></br>A Symphony of Sensation</p>
        </FooterTitle>
        <h1>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          euismod, nisl nec ultrices tincidunt, massa nisl eleifend eros, vel
          luctus eros lorem sit amet diam. Nulla facilisi. Sed ut nunc eget
          magna tincidunt ullamcorper. Cras sed nunc vel magna tempor fermentum.
          Donec auctor, nunc eget ultricies ullamcorper, diam felis mollis nisi,
          non aliquam eros neque vel nunc. Donec aliquet, magna nec fermentum
          tincidunt, libero urna aliquet lorem, ut faucibus eros eros non
          lectus. Sed aliquam, nunc eget ultricies ullamcorper, diam felis
          mollis nisi,
        </h1>
      </Center>
    </FooterBG>
  );
}
