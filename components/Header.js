import Link from 'next/link';

export default function Header() {
    return (
        <header>
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
        </header>
    );
}
    