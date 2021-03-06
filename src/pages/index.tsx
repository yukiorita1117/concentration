import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Layout from "../components/Layout";
import ReverceImage from "../components/ReverceImage";
import { cardList } from "../utils/card-list";

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
  if (numArray[0] === numArray[1]) {
    alert("ใใใ!!!!๐๐๐๐๐๐๐๐๐๐๐๐๐");
    tmpDisableFlugNum.length = 0;
    return true;
  }
  if (numArray[0] !== numArray[1]) {
    return false;
  }
};

const IndexPage = () => {
  const [isdisable1, setIsdisable1] = React.useState(true);
  const [isdisable2, setIsdisable2] = React.useState(true);
  const [isdisable3, setIsdisable3] = React.useState(true);
  const [isdisable4, setIsdisable4] = React.useState(true);

  // TODO  disableFlugNum ใจ setIsdisable[num] ใฏ ่ฑใใผใใณใผใใงใใใฎใงๆๆฆใใใใ
  //  isdisable1ใจใใฎ1ใใฉใใซใใใฌใญใทใใซใซใงใใใฐใใใใใ
  const handleClick = (num: number, disableFlugNum: number) => {
    if (stockCardNumber.length === 0) {
      if (disableFlugNum === 0) setIsdisable1(false);
      if (disableFlugNum === 1) setIsdisable2(false);
      if (disableFlugNum === 2) setIsdisable3(false);
      if (disableFlugNum === 3) setIsdisable4(false);

      stockCardNumber.push(num);
      tmpDisableFlugNum.push(disableFlugNum);
    } else if (stockCardNumber.length === 1) {
      if (disableFlugNum === 0) setIsdisable1(false);
      if (disableFlugNum === 1) setIsdisable2(false);
      if (disableFlugNum === 2) setIsdisable3(false);
      if (disableFlugNum === 3) setIsdisable4(false);

      stockCardNumber.push(num);

      const flag = compareNum(stockCardNumber);
      if (flag === false) {
        setTimeout(() => {
          // ใซใผใใ่ฃๅดใซใใใ

          // 1ๆ็ฎ
          if (tmpDisableFlugNum[0] === 0) setIsdisable1(true);
          if (tmpDisableFlugNum[0] === 1) setIsdisable2(true);
          if (tmpDisableFlugNum[0] === 2) setIsdisable3(true);
          if (tmpDisableFlugNum[0] === 3) setIsdisable4(true);

          // 2ๆ็ฎ
          if (disableFlugNum === 0) setIsdisable1(true);
          if (disableFlugNum === 1) setIsdisable2(true);
          if (disableFlugNum === 2) setIsdisable3(true);
          if (disableFlugNum === 3) setIsdisable4(true);
        }, 1500);
      }
      stockCardNumber.length = 0;
    }
  };

  return (
    <Layout title="๐ Concentration">
      <h1>็ฅ็ต่กฐๅผฑ at Next.js ๐</h1>
      <Field>
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
      </Field>
    </Layout>
  );
};

export default IndexPage;
