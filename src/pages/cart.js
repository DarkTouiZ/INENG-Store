import Nav from "../../components/Navbar";
import Center from "../../components/Center";
import styled from "styled-components";
import Button from "../../components/Button";
import { useRouter } from 'next/router';

// import Nav from "@/components/Navbar";
// import Center from "@/components/Center";
// import styled from "styled-components";
// import Button from "@/components/Button";

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
    gap: 70px;
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
    margin: 40px 80px 100px;
`;

const Quantity = styled.div`
    display: flex;
    gap: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
`;

const Price = styled.h2`
    position: absolute;
    right: 10px;
    bottom: 0px;
`;

const DeleteButton = {
    marginRight: "20px"
}

const ContShopBtn = {
    marginRight: "100px"
}

const TotalPrice = styled.h2`
    position: absolute;
    margin-top: 30px;
    right: 100px;
    
`;

const Icon = styled.svg`
    height: 24px;
    margin: 2px;
`;

export default function CartPage() {
    const router = useRouter();

    const handleContinueShop = () => {
    // Perform any additional logic before navigating to the cart page
    // For now, let's just navigate to the '/cart' route
    router.push('/');
    };
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
                            <h1 style={{marginTop: "10px"}}>iNeng-Shirt1</h1>
                            <div>
                                <Quantity>
                                    <Button white style={DeleteButton}>
                                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="#212121" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                        </Icon>
                                    </Button>
                                    <Button size={'md'} white>-</Button>
                                    <Button size={'md'} white>1</Button>
                                    <Button size={'md'} white>+</Button>
                                </Quantity>

                            </div>
                        </Column>
                        <Column>
                            <Price>THB 100</Price>
                        </Column>
                    </Wrapper>
                </Box>
                <Box>
                    <Wrapper>
                        <Column>
                            <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                        </Column>
                        <Column>
                        <h1 style={{marginTop: "10px"}}>iNeng-Shirt1</h1>
                            <div>
                                <Quantity>
                                    <Button white style={DeleteButton}>
                                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="#212121" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                        </Icon>
                                    </Button>
                                    <Button size={'md'} white>-</Button>
                                    <Button size={'md'} white>1</Button>
                                    <Button size={'md'} white>+</Button>
                                </Quantity>

                            </div>
                        </Column>
                        <Column>
                            <Price>THB 100</Price>
                        </Column>
                    </Wrapper>
                </Box>
                <Box>
                    <Wrapper>
                        <Column>
                            <img src="https://media.istockphoto.com/id/483425141/photo/blank-black-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=HLZ_CAGW4p25Iv_HAycYdjoaeSSMXfnSACQp6jH54T8="/>
                        </Column>
                        <Column>
                        <h1 style={{marginTop: "10px"}}>iNeng-Shirt1</h1>
                            <div>
                                <Quantity>
                                    <Button white style={DeleteButton}>
                                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path fill="#212121" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                        </Icon>
                                    </Button>
                                    <Button size={'md'} white>-</Button>
                                    <Button size={'md'} white>1</Button>
                                    <Button size={'md'} white>+</Button>
                                </Quantity>

                            </div>
                        </Column>
                        <Column>
                            <Price>THB 100</Price>
                        </Column>
                    </Wrapper>
                </Box>
            </ColumnsWrapper>
            <ColumnsWrapper>
            <div style={{position: "relative"}}>
                <TotalPrice>Total: THB 300</TotalPrice>
            </div>
            <CheckOutBox>
                <Column>
                    <Button size={'l'} style={ContShopBtn} onClick={handleContinueShop}>Continue Shopping</Button>
                </Column>
                <Column>
                    <Button size={'l'} >Clear</Button>
                </Column>
                <Column>
                    <Button size={'l'} primary>Check Out</Button>
                </Column>
            </CheckOutBox>
            </ColumnsWrapper>
            </Center>
        </>
    );
}