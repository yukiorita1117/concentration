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
  if (numArray[0] === numArray[1]) {
    console.log(
      "マッチ!!!!🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉",
      numArray[0],
      numArray[1]
    );
    return true;
  }
  // もし false だった場合（カードがマッチしなかった場合） は isdisable をtrue にする必要がある。
  if (numArray[0] !== numArray[1]) {
    return false;
  }
};

const Card = ({ mark, num }: Props) => {
  const [isdisable1, setIsdisable1] = React.useState(true);
  const [isdisable2, setIsdisable2] = React.useState(true);

  const handleClick = (e: any) => {
    console.log("クリックイベント::番号", num);

    if (stockCardNumber.length === 0) {
      console.log("あああああ");
      setIsdisable1(false);
      stockCardNumber.push(num);
    } else if (stockCardNumber.length === 1) {
      console.log("ええええ");

      setIsdisable2(false);
      stockCardNumber.push(num);

      const flag = compareNum(stockCardNumber);
      if (flag === false) {
        setTimeout(() => {
          // カードを裏側にする。
          setIsdisable1(true);
          setIsdisable2(true);
        }, 1500);
        console.log("1,2枚目のboolean値2", isdisable1, isdisable2);
      }
      console.log("ストックナンバー::", stockCardNumber);
      stockCardNumber.length = 0;
    }
  };

  console.log("1,2枚目のboolean値", isdisable1, isdisable2);

  // 1枚目のカード番号を取得しておき、2枚目選択後、不一致であれば そのidのDOMに以下を差し込む。
  // <div><div class="ReverceImage__Container-yykbpo-0 bSWqJZ"><img src="reverce.jpeg" width="50" height="80" alt="RC"></div></div>

  return (
    <>
      {!(isdisable1 === false || isdisable2 === false) && (
        <div onClick={(e: any) => handleClick(e)}>
          <StyledReverceImage />
        </div>
      )}
      <Container key={num}>
        <span>{mark}</span>
        <div>{num}</div>
      </Container>
    </>
  );
};

export default Card;
