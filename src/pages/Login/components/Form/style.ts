import { DeepRequired, FieldErrorsImpl } from "react-hook-form";
import styled from "styled-components";
import { IInputsLogin } from ".";

interface IPropsFormStyled {
  errors: FieldErrorsImpl<DeepRequired<IInputsLogin>>;
  isError: boolean;
}

export const FormStyled = styled.form<IPropsFormStyled>`
  background-color: #212529;
  width: 90%;
  height: 300px;

  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }
  div > label {
    font-weight: 400;
    font-size: 12px;
    color: #f8f9fa;

    margin-bottom: 12px;
  }

  div > input {
    background-color: #343b41;
    color: #f8f9fa;

    width: 93%;
    height: 40px;

    margin-bottom: 10px;
    padding-left: 5%;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
  }

  div > span {
    color: red;

    height: 12px;

    font-size: 12px;
    font-weight: 600;
  }

  button {
    background-color: #ff577f;
    color: #ffffff;
    width: 99.8%;
    height: 46px;

    font-weight: 500;
    font-size: 16px;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    cursor: pointer;
    transition: 0.5s;
  }

  button:hover {
    background-color: #9e364e;
  }

  #email {
    border: ${({ errors, isError }) =>
      errors.email || isError ? "1.2px solid #88001f" : "1.2px solid #343b41"};
  }

  #email:focus {
    outline: none;
  }

  #password {
    border: ${({ errors, isError }) =>
      errors.password || isError
        ? "1.2px solid #88001f"
        : "1.2px solid #343b41"};
  }

  #password:focus {
    outline: none;
  }
`;
