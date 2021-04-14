import * as React from "react";
import styled from "styled-components";
import ReverceImage from "./ReverceImage";

type Props = {
  mark: string;
  num: number;
};

const StyledReverceImage = styled(ReverceImage)``;

const Container = styled.div`
  width: 50px;
  height: 80px;
  border: 1px solid;
  border-radius: 5%;
  margin-top: 4px;
  margin-left: 4px;
`;

const Card = ({ mark, num }: Props) => {
  const [isdisable, setIsdisable] = React.useState(true);

  const handleClick = (e: any) => {
    console.log("クリックイベント", e.target);
    setIsdisable(false);
  };
  return (
    <>
      {isdisable && <StyledReverceImage />}
      <Container onClick={(e: any) => handleClick(e)}>
        <span>{mark}</span>
        <div>{num}</div>
      </Container>
    </>
  );
};

export default Card;
