import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { cardList } from "../utils/card-list";
import styled from "styled-components";

// TODO カードの並び順を random() を用いて並び替える。(配列いじるか？)
// TODO random()を発火させてCardコンポーネントを再レンダリングするためのhandlerとそのhandlerを発火するためのButtonを作る。

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const ReverceCard = styled.img``;

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>神経衰弱 at Next.js 👋</h1>
    <Field>
      {cardList.map((card) => {
        return (
          <>
            {/* なぜかimgタグの画像が表示されない */}
            <img src="/public/reverce.jpeg" alt="RC" />
            <Card key={card.mark + card.num} mark={card.mark} num={card.num} />
          </>
        );
      })}
    </Field>
  </Layout>
);

export default IndexPage;
