import { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { HeaderStyle } from "./style";

interface IPropsHeader {
  heigth: number;
  children: ReactNode;
}

const Header = ({ heigth, children }: IPropsHeader) => {
  const history = useHistory();

  return (
    <HeaderStyle heigth={heigth}>
      <div>
        <img
          src={require("../../assets/imgs/logo.png")}
          alt="Logo da Kenzie Hub"
        />

        <button
          onClick={() => {
            history.push("/");
            window.localStorage.clear();
          }}
        >
          {children}
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
