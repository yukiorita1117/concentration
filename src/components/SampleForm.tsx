import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  width: 50px;
  height: 80px;
  border: 1px solid;
  border-radius: 5%;
  margin-top: 4px;
  margin-left: 4px;
  background-color: white;
`;

const SampleForm = () => {
  const [isdisable, setIsdisable] = React.useState(true);

  const handleClick = (e: any) => {
    console.log("クリックイベント", e.target);
    setIsdisable(false);
  };
  return (
    <>
      {isdisable && <div onClick={(e: any) => handleClick(e)}></div>}
      <Container></Container>
    </>
  );
};

export default SampleForm;
