import styled from "styled-components";

import Center from "@/components/Center";
import Button from "@/components/Button";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin: 1rem auto;
    font-weight: normal;
    font-size: 3rem;
`;
// const Description = styled.p`
//     color:#aaa;
//     font-size: .8rem;
// `;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    img {
        max-width: 100%;
        border-radius: 20px;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;    
`;
// const ButtonWrapper = styled.div`
//     display: flex;
//     gap: 10px;
// `;

export default function BestSeller() {
    return (
        <Bg>
            <Center>
                <Title>Best Seller</Title>
                <Wrapper>
                    <Column>
                        <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                    </Column>
                    <Column>
                        <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                    </Column>
                    <Column>
                        <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                    </Column>
                    <Button primary size="l">Buy Now</Button>
                </Wrapper>
            </Center>
        </Bg>
    )
}