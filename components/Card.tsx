import * as React from "react";
import styled from "styled-components";

type Props = {
  mark: string;
  num: number;
};

const Container = styled.div`
  width: 50px;
  height: 80px;
  border: 1px solid;
  border-radius: 5%;
  margin-top: 4px;
  margin-left: 4px;
`;

const Card = ({ mark, num }: Props) => (
  <Container>
    <span>{mark}</span>
    <div>{num}</div>
  </Container>
);

export default Card;
