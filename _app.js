import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter+Tight&display=swap');
  body{
    padding: 0;
    margin: 0;
    font-family: 'Inter Tight', sans-serif;
    background-color: #fff;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
