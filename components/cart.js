import Nav from "@/components/Navbar";
import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";

const ColumnsWrapper = styled.div`
    display: grid;
    gap: 20px;
    margin-top: 40px;
`;

const Box =  styled.div`
background-color: #E9E9E9;
border-radius: 10px;
padding: 20px;
margin: 0px 80px;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr .8fr;
    gap: 40px;
    img {
        max-width: 100%;
        border-radius: 10px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;    
    position: relative;
`;

const CheckOutBox = styled.div`
    display: grid;
    grid-template-columns: 1.5fr .3fr .8fr;
    gap: 10px;
    padding: 20px;
    margin: 0px 80px;
`;

const Control = styled.div`
    display: flex;
    gap: 20px;
`;

const Quantity = styled.div`
    display: flex;
    gap: 5px;
`;

const Price = styled.h5`
    position: absolute;
    right: 10px;
    bottom: 0px;
`;

export default function CartPage() {
    return (
        <>
            <Nav />
            <Center>
            <ColumnsWrapper>
                <Box>
                    <Wrapper>
                        <Column>
                            <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                        </Column>
                        <Column>
                            <h5>iNeng-Shirt1</h5>
                            <Control>
                                <Button white>.</Button>
                                <Quantity>
                                    <Button white>-</Button>
                                    <Button white>1</Button>
                                    <Button white>+</Button>
                                </Quantity>
                            </Control>
                        </Column>
                        <Column>
                            <Price>100BTH</Price>
                        </Column>
                    </Wrapper>
                </Box>
                <Box>
                    <Wrapper>
                        <Column>
                            <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                        </Column>
                        <Column>
                        <h5>iNeng-Shirt1</h5>
                        </Column>
                        <Column>
                            <Price>100BTH</Price>
                        </Column>
                    </Wrapper>
                </Box>
                <Box>
                    <Wrapper>
                        <Column>
                            <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                        </Column>
                        <Column>
                        <h5>iNeng-Shirt1</h5>
                        </Column>
                        <Column>
                            <Price>100BTH</Price>
                        </Column>
                    </Wrapper>
                </Box>
            </ColumnsWrapper>
            <ColumnsWrapper>
            <h5>Total: 300 BTH</h5>
            <CheckOutBox>
                <Column>
                    <Button size={'md'} >Continue Shopping</Button>
                </Column>
                <Column>
                    <Button size={'md'} >Clear</Button>
                </Column>
                <Column>
                    <Button size={'md'} primary>Check Out</Button>
                </Column>
            </CheckOutBox>
            </ColumnsWrapper>
            </Center>
        </>
    );
}