import * as React from "react";
import styled from "styled-components";

type Props = {};

const Container = styled.div`
  top: 90px;
  position: relative;
  left: 5.3px;
`;

const ReverceImage = ({}: Props) => (
  <Container>
    <img src="reverce.jpeg" width="50" height="80" alt="RC"></img>
  </Container>
);

export default ReverceImage;
