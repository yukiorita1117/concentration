import { GetServerSideProps } from "next";
import React from "react";
// import Card from "../components/Card";
// import Layout from "../components/Layout";
// import { cardList } from "../utils/card-list";
import styled from "styled-components";
import SampleForm from "../components/SampleForm";

// TODO random()を発火させてCardコンポーネントを再レンダリングするためのhandlerとそのhandlerを発火するためのButtonを作る。

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

type Props = {
  data: any;
};

const IndexPage = () => {
  return (
    <SampleForm />

    // <Layout title="👋 Concentration">
    //   <h1>神経衰弱 at Next.js 👋</h1>
    //   <Field>
    //     {cardList.map((card) => {
    //       return (
    //         <>
    //           <div>
    //             <Card
    //               key={card.mark + card.num}
    //               mark={card.mark}
    //               num={card.num}
    //             />
    //           </div>
    //         </>
    //       );
    //     })}
    //   </Field>
    // </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data: any = await fetch("https://myapi.dev/ssr").then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
};

export default IndexPage;
