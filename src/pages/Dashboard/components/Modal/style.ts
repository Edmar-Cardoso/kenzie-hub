import { DeepRequired, FieldErrorsImpl } from "react-hook-form";
import styled from "styled-components";
import { IInputsModal } from ".";

interface IPropsContainerModal {
  error: FieldErrorsImpl<DeepRequired<IInputsModal>>;
  isError: boolean;
}

export const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .pseudoContainer {
    opacity: 1;
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    width: 90%;
    max-width: 370px;
    height: 330px;

    border-radius: 4px;
  }

  .headerModal {
    background: #343b41;

    width: 90%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0% 5%;
  }

  .headerModal span {
    color: #f8f9fa;

    font-weight: 700;
    font-size: 14px;
  }

  .headerModal button {
    background-color: transparent;

    width: 19px;
    height: 19px;

    padding: 0px;
    border: none;

    cursor: pointer;
    transition: 0.5s;
  }

  .headerModal button:hover {
    opacity: 0.5;
  }

  .headerModal button .icon {
    color: #868e96;

    width: 100%;
    height: 100%;
  }

  .mainModal {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 90%;
  height: 270px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .divInfoForm {
    min-height: 77px;
    display: flex;
    flex-direction: column;
  }

  .divInfoForm label {
    color: #f8f9fa;

    font-weight: 400;
    font-size: 11px;

    margin-bottom: 4px;
  }

  .divInfoForm input {
    background-color: #343b41;
    color: #ececec;

    width: 95%;
    height: 43px;

    padding: 0px 2%;

    border: ${({ error, isError }: IPropsContainerModal) =>
      error.title || isError ? "1px solid red" : "1px solid #343b41"};
    border-radius: 4px;
  }

  .divInfoForm input::placeholder {
    color: #808080;
    font-weight: 400;
    font-size: 14px;
  }

  .divInfoForm input:focus {
    outline: none;
  }

  .divInfoForm select {
    background-color: #343b41;
    color: #ececec;

    width: 100%;
    height: 44px;

    font-weight: 400;
    font-size: 14px;

    padding-left: 2%;

    border: 1px solid #343b41;
    border-radius: 4px;

    cursor: pointer;
  }

  .divInfoForm select:focus {
    outline: none;
  }

  button {
    background-color: #ff577f;
    color: #ffffff;

    width: 100%;
    height: 46px;

    font-weight: 500;
    font-size: 16px;

    border: 1px solid #ff577f;
    border-radius: 4px;

    cursor: pointer;
    transition: 0.5s;
  }

  button:hover {
    background-color: #9e364e;
  }

  span {
    height: 14px;
    color: red;

    font-weight: 500;
    font-size: 13px;

    margin-top: 4px;
    margin-left: 4px;
  }
`;
