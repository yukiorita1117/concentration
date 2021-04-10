import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { cardList } from "../utils/card-list";
import styled from "styled-components";

// TODO random()を発火させてCardコンポーネントを再レンダリングするためのhandlerとそのhandlerを発火するためのButtonを作る。

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const ReverceCard = styled.img``;

const IndexPage = () => (
  <Layout title="👋 Concentration">
    <h1>神経衰弱 at Next.js 👋</h1>
    <img src="/public/reverce.jpeg" width="50" height="50" alt="RC" />

    <Field>
      {cardList.map((card) => {
        return (
          <>
            {/* なぜかimgタグの画像が表示されない */}
            <Card key={card.mark + card.num} mark={card.mark} num={card.num} />
          </>
        );
      })}
    </Field>
  </Layout>
);

export default IndexPage;
