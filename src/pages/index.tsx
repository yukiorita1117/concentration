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

const IndexPage = () => {
  return (
    <Layout title="👋 Concentration">
      <h1>神経衰弱 at Next.js 👋</h1>

      <Field>
        {cardList.map((card) => {
          return (
            <>
              <div>
                <Card
                  key={card.mark + card.num}
                  mark={card.mark}
                  num={card.num}
                />
              </div>
            </>
          );
        })}
      </Field>
    </Layout>
  );
};

export default IndexPage;
