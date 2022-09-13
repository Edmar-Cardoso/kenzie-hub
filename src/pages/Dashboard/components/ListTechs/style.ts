import styled from "styled-components";

export const Container = styled.div`
  background-color: #212529;

  width: 90%;
  max-width: 810px;
  height: auto;
  min-height: 120px;

  margin: 0 auto;
  padding: 20px 0px;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    color: #f8f9fa;

    font-weight: 600;
    font-size: 18px;
    text-align: center;

    margin: auto;
  }

  div {
    width: 100%;

    margin: 0 auto;
  }

  .containerTech {
    background-color: #121214;
    color: #fff;

    width: 90%;
    height: 50px;

    padding: 0% 2.5%;

    border-radius: 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 700;
    font-size: 14.21px;

    transition: 0.5s;
  }

  .containerTech:hover {
    background-color: #343b41;
  }

  .containerTech div {
    width: 100px;
    height: 20px;

    margin: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .containerTech div span {
    color: #c0c0c0;

    font-weight: 400;
    font-size: 12.182px;
  }

  .containerTech div button {
    background-color: transparent;

    width: 13px;
    height: 13px;

    margin-top: -2px;
    padding: 0px;

    border: none;

    cursor: pointer;
  }

  .icon {
    color: #fff;

    width: 100%;
    height: 100%;
  }
`;
