import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .divUser {
    width: calc(100% - 2);
    height: 160px;

    border-top: 1px solid #343b41;
    border-bottom: 1px solid #343b41;
  }
  .containerUser {
    width: 90%;
    height: 100%;
    max-width: 810px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin: 0 auto;
  }

  .containerUser > .userName {
    color: #f8f9fa;

    font-weight: 700;
    font-size: 18px;
  }

  .containerUser > .userModule {
    color: #868e96;

    font-weight: 400;
    font-size: 12px;
  }

  main {
    width: 100%;

    margin: 50px 0px 50px 0px;
  }

  .headerTechs {
    background-color: #121214;
    width: 90%;
    height: 50px;
    max-width: 810px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35px;

    margin: 0 auto;
  }

  .headerTechs h3 {
    color: #f8f9fa;

    font-weight: 600;
    font-size: 16px;
  }

  .headerTechs button {
    background-color: #212529;

    width: 30px;
    height: 30px;

    padding: 0px;
    border: none;
    border-radius: 4px;

    cursor: pointer;
    transition: 0.5s;
  }

  .headerTechs button:hover {
    background-color: #32363f;
  }

  .headerTechs button .icon {
    color: #ffffff;

    width: 50%;
    height: 50%;

    margin: auto;
  }

  .modal {
    background-color: #343b41;
    color: #fff;

    border-radius: 4px;

    text-align: center;
  }
`;
