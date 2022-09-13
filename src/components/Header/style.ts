import styled from "styled-components";

interface IPropsHeaderStyle {
  heigth: number;
}

export const HeaderStyle = styled.header`
  background-color: #121214;
  width: 92%;
  height: 85px;

  margin: 0 auto;

  div {
    width: 100%;
    height: 100%;
    max-width: ${({ heigth }: IPropsHeaderStyle) => `${heigth}px`};

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
  }

  div > img {
    width: 150px;
    height: 40px;

    margin-left: -19px;
  }

  div > button {
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

  div button:hover {
    background-color: #32363f;
  }
`;
