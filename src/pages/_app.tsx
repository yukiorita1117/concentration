import React from "react";
import App, { Container } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset } from "styled-reset";

const fontFamily =
  "arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Hiragino Sans, sans-serif";

export const createMyGlobalStyle = ({
  fontFamily,
}: {
  fontFamily: string;
}): any => createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    /* stylelint-disable-next-line declaration-property-unit-allowed-list */
    font-size: 62.5%;
    /* Headerの高さ */
    scroll-padding-top: 56px;
  }
  body {
    color: #f3efef;
    font-weight: Bold;
    /* stylelint-disable-next-line declaration-property-unit-allowed-list */
    font-size: 1.4em;
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    background-color:#343440;
  }
  h1 {
    color:white;
  }
  a {
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  button {
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    appearance: none;
  }
  input {
    font-size: inherit;
    border: none;
    outline: 0;
    /* IEとEdgeのデフォルトの×ボタンを非表示 */
    &::-ms-clear {
      display: none;
    }
  }
  
`;
const GlobalStyle = createMyGlobalStyle({ fontFamily });

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      //  ProviderはReactのcontextの仕組み。コンテクストを使用することで、中間の要素群を経由してプロパティを渡すことを避けることができる
      // 参照:https://styled-components.com/docs/advanced
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
