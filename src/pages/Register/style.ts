import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 90%;
    max-width: 360px;
    height: 90px;

    margin-top: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header > img {
    width: 150px;
    height: 40px;
  }

  header > button {
    width: 68px;
    height: 41px;

    background-color: #212529;
    color: #f8f9fa;

    border: none;
    border-radius: 4px;

    font-weight: 600;
    font-size: 12px;

    margin-right: 5px;

    cursor: pointer;
    transition: 0.5s;
  }

  header > button:hover {
    background-color: #32363f;
  }

  .container-main {
    background-color: #212529;

    width: 90%;
    max-width: 360px;
    height: 825px;

    padding: 35px 0px 20px 0px;
    margin-bottom: 30px;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container-main h2 {
    color: #f8f9fa;

    font-weight: 700;
    font-size: 18px;

    margin-bottom: 20px;
  }

  .container-main p {
    color: #868e96;

    font-weight: 400;
    font-size: 12px;

    margin-bottom: 20px;
  }

  .modal {
    background-color: #343b41;
    color: #fff;
    border-radius: 4px;
  }
`;
