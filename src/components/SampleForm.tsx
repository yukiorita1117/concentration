import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  width: 1000px;
  height: 800px;
  padding: 100px 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  margin-top: 16px;
`;

const RequiredInput = styled.input`
  margin-top: 16px;
`;

const SubmitButton = styled.input`
  margin-top: 16px;
`;

const ErrorMessage = styled.span`
  margin-top: 8px;
  color: red;
`;

type Inputs = {
  example: string;
  exampleRequired: string;
};

const SampleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);
  return (
    <Container>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          {/* register "機能を使って、入力した内容をフックに登録します。 */}
          <Input defaultValue="test" {...register("example")} />

          {/* 必須または他の標準的なHTML検証ルールによる検証を含む */}
          <RequiredInput {...register("exampleRequired", { required: true })} />
          {/* フィールドの検証に失敗した場合、エラーが返されます。  */}
          {errors.exampleRequired && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
          <SubmitButton type="submit" />
        </Wrapper>
      </form>
    </Container>
  );
};

export default SampleForm;
