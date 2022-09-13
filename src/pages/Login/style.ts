import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;
  width: 100%;
  height: auto;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    background-color: #f8f9fa;
    width: 300px;
    height: 90px;
  }

  h2 {
    background-color: #212529;
    color: #f8f9fa;
    text-align: center;
    font-weight: 700;
    font-size: 18px;

    margin-bottom: 20px;
  }
  .container-form {
    background-color: #212529;
    width: 90%;
    max-width: 360px;
    height: 390px;
    padding: 40px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 4px;
  }

  .container-form > div {
    width: 90%;
    height: 100px;
    text-align: center;
  }

  .container-form > div > p {
    color: #868e96;
    font-weight: 600;
    font-size: 12px;
  }

  .link {
    background-color: #868e96;
    color: #f8f9fa;

    width: 99%;
    height: 46px;

    font-weight: 500;
    font-size: 16px;
    text-decoration: none;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;

    cursor: pointer;
    transition: 0.5s;
  }

  .link:hover {
    background-color: #4b5054;
  }

  .modal {
    background-color: #343b41;
    color: #fff;

    text-align: center;

    border-radius: 4px;
  }

  .message {
    background-color: #343b41;
    color: #fff;

    text-align: center;

    border-radius: 4px;
  }
`;
