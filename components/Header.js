import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const HeaderStyles = styled.header`
  background-color: #fff;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
`;

const Logo = styled(Link)`
  color: #383838;
  text-decoration: none;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
    align-items: center;
`;

const NavLink = styled(Link)`
    color: #383838;
    text-decoration: none;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Center>
        <Wrapper>
            <Logo href="/">INENG</Logo>
            <StyledNav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">All products</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/cart">Cart(0)</NavLink>
            <NavLink href="/Account">Account</NavLink>
            </StyledNav>
        </Wrapper>
      </Center>
    </HeaderStyles>
  );
}
