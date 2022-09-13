import { DeepRequired, FieldErrorsImpl } from "react-hook-form";
import styled from "styled-components";
import { IInputsRegister } from ".";

interface IPropsFromRegister {
  errors: FieldErrorsImpl<DeepRequired<IInputsRegister>>;
  isError?: boolean;
}

export const FormRegister = styled.form<IPropsFromRegister>`
  width: 90%;
  height: auto;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    color: #f8f9fa;

    margin-bottom: 12px;
  }

  input {
    background-color: #343b41;
    color: #f8f9fa;

    width: 93%;
    height: 40px;

    margin-bottom: 10px;
    padding-left: 5%;

    border: 1.2px solid #343b41;
    border-radius: 4px;
  }

  #name {
    border: ${({ errors }) =>
      errors.name ? "1.2px solid #88001f" : "1.2px solid #343b41"};
  }

  #name:focus {
    outline: none;
    border: ${({ errors }) =>
      errors.name ? "1.2px solid #88001f" : "1.2px solid #f8f9fa"};
  }

  #email {
    border: ${({ errors, isError }) =>
      errors.email || isError ? "1.2px solid #88001f" : "1.2px solid #343b41"};
  }

  #email:focus {
    outline: none;
    border: ${({ errors, isError }) =>
      errors.email || isError ? "1.2px solid #88001f" : "1.2px solid #f8f9fa"};
  }

  #password {
    border: ${({ errors }) =>
      errors.password ? "1.2px solid #88001f" : "1.2px solid #343b41"};
  }

  #password:focus {
    outline: none;
    border: ${({ errors }) =>
      errors.password ? "1.2px solid #88001f" : "1.2px solid #f8f9fa"};
  }

  #confirmPassword {
    border: ${({ errors }) =>
      errors.confirmPassword ? "1.2px solid #88001f" : "1.2px solid #343b41"};
  }

  #confirmPassword:focus {
    outline: none;
    border: ${({ errors }) =>
      errors.confirmPassword ? "1.2px solid #88001f" : "1.2px solid #f8f9fa"};
  }

  #bio {
    border: ${({ errors }) =>
      errors.bio ? "1.2px solid #88001f" : "1.2px solid #343b41"};
  }

  #bio:focus {
    outline: none;
    border: ${({ errors }) =>
      errors.bio ? "1.2px solid #88001f" : "1.2px solid #f8f9fa"};
  }

  #contact {
    border: ${({ errors }) =>
      errors.contact ? "1.2px solid #88001f" : "1.2px solid #343b41"};
  }

  #contact:focus {
    outline: none;
    border: ${({ errors }) =>
      errors.contact ? "1.2px solid #88001f" : "1.2px solid #f8f9fa"};
  }

  span {
    color: red;

    height: 12px;

    font-size: 12px;
    font-weight: 600;
  }

  select {
    background-color: #343b41;
    color: #c0c0c0;
    width: 99%;
    height: 44px;

    margin-bottom: 10px;
    padding-left: 5%;

    border: 1.2182px solid #343b41;
    border-radius: 4px;

    cursor: pointer;
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
`;
