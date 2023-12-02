import React from "react";
import Center from "./Center";
import styled from "styled-components";

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
    grid-template-columns: 1fr 1fr;
    gap: 40px;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

export default function Featured() {
  return (
    <Bg>
        <Center>
            <Wrapper>
            <div>
                <h1>Featured</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla euismod, nisl nec ultrices tincidunt, massa nisl
                eleifend eros, vel luctus eros lorem sit amet diam.
                Nulla facilisi. Sed ut nunc eget magna tincidunt
                ullamcorper. Cras sed nunc vel magna tempor
                fermentum. Donec auctor, nunc eget ultricies
                ullamcorper, diam felis mollis nisi, non aliquam
                eros neque vel nunc. Donec aliquet, magna nec
                fermentum tincidunt, libero urna aliquet lorem, ut
                faucibus eros eros non lectus. Sed aliquam, nunc
                eget ultricies ullamcorper, diam felis mollis nisi,</p>
            </div>
            <div>
                
            </div>
            </Wrapper>
        </Center>
    </Bg>
  );
}