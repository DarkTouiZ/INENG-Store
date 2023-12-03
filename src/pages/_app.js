import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}