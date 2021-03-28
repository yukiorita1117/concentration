import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { cardList } from "../utils/card-list";

// TODO カードを 4 * 13 で並べる
// TODO カードの並び順を random() を用いて並び替える。(配列いじるか？)

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>神経衰弱 at Next.js 👋</h1>
    <div>
      {cardList.map((card) => {
        return (
          <Card key={card.mark + card.num} mark={card.mark} num={card.num} />
        );
      })}
    </div>
  </Layout>
);

export default IndexPage;
