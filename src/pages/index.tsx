import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Layout from "../components/Layout";
import ReverceImage from "../components/ReverceImage";
import { cardList } from "../utils/card-list";

// TODO random()を発火させてCardコンポーネントを再レンダリングするためのhandlerとそのhandlerを発火するためのButtonを作る。

const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

type Props = {
  data: any;
};

const stockCardNumber = [];
const tmpDisableFlugNum = [];

const compareNum = (numArray: number[]) => {
  // compare cards. if match => match flag is true.
  if (numArray[0] === numArray[1]) {
    alert("マッチ!!!!🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
    return true;
  }
  // もし false だった場合（カードがマッチしなかった場合） は isdisable をtrue にする必要がある。
  if (numArray[0] !== numArray[1]) {
    return false;
  }
};

const IndexPage = () => {
  const [isdisable1, setIsdisable1] = React.useState(true);
  const [isdisable2, setIsdisable2] = React.useState(true);
  const [isdisable3, setIsdisable3] = React.useState(true);
  const [isdisable4, setIsdisable4] = React.useState(true);

  const handleClick = (num: number, disableFlugNum: number) => {
    if (stockCardNumber.length === 0) {
      console.log("あああああ");
      if (disableFlugNum === 0) setIsdisable1(false);
      if (disableFlugNum === 1) setIsdisable2(false);
      if (disableFlugNum === 2) setIsdisable3(false);
      if (disableFlugNum === 3) setIsdisable4(false);

      stockCardNumber.push(num);
      tmpDisableFlugNum.push(disableFlugNum);
    } else if (stockCardNumber.length === 1) {
      console.log("ええええ");

      if (disableFlugNum === 0) setIsdisable1(false);
      if (disableFlugNum === 1) setIsdisable2(false);
      if (disableFlugNum === 2) setIsdisable3(false);
      if (disableFlugNum === 3) setIsdisable4(false);

      stockCardNumber.push(num);

      const flag = compareNum(stockCardNumber);
      if (flag === false) {
        setTimeout(() => {
          // カードを裏側にする。
          // 選んだ要素の useStateを true にしてあげる。

          // 1枚目
          if (tmpDisableFlugNum[0] === 0) setIsdisable1(true);
          if (tmpDisableFlugNum[0] === 1) setIsdisable2(true);
          if (tmpDisableFlugNum[0] === 2) setIsdisable3(true);
          if (tmpDisableFlugNum[0] === 3) setIsdisable4(true);

          // 2枚目
          if (disableFlugNum === 0) setIsdisable1(true);
          if (disableFlugNum === 1) setIsdisable2(true);
          if (disableFlugNum === 2) setIsdisable3(true);
          if (disableFlugNum === 3) setIsdisable4(true);

          setIsdisable1(true);
          setIsdisable2(true);
        }, 1500);
        console.log("1,2枚目のboolean値2", isdisable1, isdisable2);
      }
      console.log("ストックナンバー::", stockCardNumber);
      stockCardNumber.length = 0;
    }
    console.log("1,2枚目のboolean値1", isdisable1, isdisable2, num);
  };

  return (
    <Layout title="👋 Concentration">
      <h1>神経衰弱 at Next.js 👋</h1>
      <Field>
        {/* {cardList.map((card) => {
          return ( */}
        <>
          <div>
            <>
              {isdisable1 && (
                <div onClick={() => handleClick(cardList[0].num, 0)}>
                  <ReverceImage />
                </div>
              )}
              <Card
                key={cardList[0].mark + cardList[0].num}
                mark={cardList[0].mark}
                num={cardList[0].num}
              />
            </>
            <>
              {isdisable2 && (
                <div onClick={() => handleClick(cardList[1].num, 1)}>
                  <ReverceImage />
                </div>
              )}
              <Card
                key={cardList[1].mark + cardList[1].num}
                mark={cardList[1].mark}
                num={cardList[1].num}
              />
            </>
            <>
              {isdisable3 && (
                <div onClick={() => handleClick(cardList[2].num, 2)}>
                  <ReverceImage />
                </div>
              )}
              <Card
                key={cardList[2].mark + cardList[2].num}
                mark={cardList[2].mark}
                num={cardList[2].num}
              />
            </>
            <>
              {isdisable4 && (
                <div onClick={() => handleClick(cardList[3].num, 3)}>
                  <ReverceImage />
                </div>
              )}
              <Card
                key={cardList[3].mark + cardList[3].num}
                mark={cardList[3].mark}
                num={cardList[3].num}
              />
            </>
          </div>
        </>
        {/* ); */}
        {/* })} */}
      </Field>
    </Layout>
  );
};

export default IndexPage;
