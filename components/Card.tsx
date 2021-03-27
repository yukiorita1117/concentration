import * as React from "react";
import styled from "styled-components";

type Props = {
  mark: string;
  num: number;
};

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 50px;
  height: 80px;
  border: 1px solid;
`;

const Card = ({ mark, num }: Props) => (
  <Container>
    <span>{mark}</span>
    <div>{num}</div>
  </Container>
);

export default Card;

// TODO トランプ1枚のデザインをcssでstylingする
