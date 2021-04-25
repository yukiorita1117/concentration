import React from "react";
// import App, { Container } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset } from "styled-reset";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../.mocks/");
}

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

// class componentで書いた場合

// // Next.jsの Appを継承することで、ページの初期化を制御できる様になる。
// つまりは以下の設定が可能になります：
// ページ移動間の固定レイアウト
// componentDidCatchを使用したカスタムエラーハンドリング
// 状態管理ライブラリとの結合
// Reduxの <Provider>でラップするなど
// 全ページで必要な挙動を書ける場所なので、他にも広告まわりの関数の実行や、NProgressなどのローディングを設定したりしています。
// // これを行い、Globalなstyleを追加する。
// // 参照: https://nextjs.org/docs/advanced-features/custom-app

// export default class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       //  ProviderはReactのcontextの仕組み。コンテクストを使用することで、中間の要素群を経由してプロパティを渡すことを避けることができる
//       // 参照:https://styled-components.com/docs/advanced
//       <ThemeProvider theme={theme}>
//         <Container>
//           <GlobalStyle />
//           <Component {...pageProps} />
//         </Container>
//       </ThemeProvider>
//     );
//   }
// }

// functional componentで書く
export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* ハッシュへのスクロールを処理するための Containerコンポーネントは現在不必要になった。この機能はツリー上に移動している */}
        {/* <Container> */}
        <GlobalStyle />
        <Component {...pageProps} />
        {/* </Container> */}
      </ThemeProvider>
    </>
  );
}
