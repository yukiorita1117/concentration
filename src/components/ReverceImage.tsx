import * as React from "react";
import styled from "styled-components";

type Props = {};

const Container = styled.div`
  top: 5px;
  position: relative;
  left: 55.3px;
  color: ffffff;
`;

const ReverceImage = ({}: Props) => (
  <Container>
    <img src="reverce.jpeg" width="50" height="80" alt="RC"></img>
  </Container>
);

export default ReverceImage;
