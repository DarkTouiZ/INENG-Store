import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
    background-color: #fff;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
`;
const Logo = styled(Link)`
    color: #282828;
    text-decoration: none;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`;
const Navlink = styled(Link)`
    color: #686868;
    text-decoration: none;
`;
const Icon = styled.svg`
    height: 24px;
    margin-right: 5px;
`;
const SearchBar = styled.input`
    margin: auto 20px;
    widht: 20px;
    height: 10px;
    padding: 5px;
`;

export default function Nav() {
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>
                        <h1>iNeng Store</h1>
                    </Logo>
                    <StyledNav>
                        <Navlink href="https://all-product-c95db.web.app/">
                            All Products
                        </Navlink>
                        <Navlink href={'/cart'}>
                            <Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </Icon>
                        </Navlink>
                        <Navlink href={'/'}>
                            <Icon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </Icon>
                        </Navlink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}