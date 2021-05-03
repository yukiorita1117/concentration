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
  color: black;
  background-color: white;
`;

const stockCardNumber = [];

const compareNum = (numArray: number[]) => {
  // compare cards. if match => match flag is true.
  if (numArray[0] === numArray[1])
    console.log(
      "マッチ!!!!🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉",
      numArray[0],
      numArray[1]
    );
  // もし false だった場合（カードがマッチしなかった場合） は isdisable をtrue にする必要がある。
};

const Card = ({ mark, num }: Props) => {
  const [isdisable, setIsdisable] = React.useState(true);

  const handleClick = (e: any) => {
    console.log("クリックイベント::番号", num);
    setIsdisable(false);
    stockCardNumber.push(num);

    console.log("配列の中身は？？？::", stockCardNumber);

    if (stockCardNumber.length === 2) {
      compareNum(stockCardNumber);
      stockCardNumber.length = 0;
    }
  };
  return (
    <>
      {isdisable && (
        <div onClick={(e: any) => handleClick(e)}>
          <StyledReverceImage />
        </div>
      )}
      <Container>
        <span>{mark}</span>
        <div>{num}</div>
      </Container>
    </>
  );
};

export default Card;
