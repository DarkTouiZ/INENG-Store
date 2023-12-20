import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  import url('https://fontsgeek.com/fonts/Bahnschrift-Regular');
  * {
    margin: 0;
    padding: 0;
    font-family: 'bahnschrift', sans-serif;
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