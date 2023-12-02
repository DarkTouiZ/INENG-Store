import Link from 'next/link';
import styled from 'styled-components';

const headerStyle = styled.header`
    backgroundColor: '#383838',
    color: '#fff',
`;

export default function Header() {
    return (
        <headerStyle>
            <Link href="/">INENG</Link>
            <nav>
                <Link href ="/">
                    Home
                </Link>
                <Link href="/products">
                    All products
                </Link>
                <Link href="/categories">
                    Categories
                </Link>
                <Link href="/cart">
                    Cart(0)
                </Link>
            </nav>
        </headerStyle>
    );
}
    