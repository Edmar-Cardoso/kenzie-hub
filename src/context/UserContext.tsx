import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginRequisition, { IDataBaseLogin } from "../services/loginRequisition";
import registerRequisition, {
  IDataBaseRegister,
} from "../services/registerRequisition";

interface IPropsProviders {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

interface IUserContext {
  loginIn: (data: IDataBaseLogin) => void;
  isError: boolean;
  registerIn: (data: IDataBaseRegister) => void;
  isErrorRegister: boolean;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const Providers = ({ children }: IPropsProviders) => {
  const history = useHistory();

  const [isError, setIsError] = useState<boolean>(false);
  const [isErrorRegister, setIsErrorRegister] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);

  const loginIn = (data: IDataBaseLogin) => {
    loginRequisition(data)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", response.token);

        toast.success("Login feito com sucesso!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          className: "modal",
        });

        setIsError(false);
        setUser(response.user);

        setTimeout(() => history.push("/dashboard"), 3200);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou senha incorretos!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          className: "modal",
        });
        setIsError(true);
      });
  };

  const registerIn = (data: IDataBaseRegister) => {
    delete data.confirmPassword;

    registerRequisition(data)
      .then((response) => {
        toast.success("Usuário criado com sucesso! Faça o login!", {
          position: "top-center",
          autoClose: 2500,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          className: "modal",
        });

        setIsError(false);

        setTimeout(() => history.push("/"), 3200);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.message === "Email already exists") {
          toast.error("Email já cadastrado", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            className: "modal",
          });
        }

        setIsErrorRegister(true);
      });
  };

  useEffect(() => {
    async function loadUser() {
      const token_user = window.localStorage.getItem("@TOKEN");

      if (token_user) {
        try {
          const { data } = await api.get<IUser>(`/profile`, {
            headers: { Authorization: `bearer ${token_user}` },
          });

          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loginIn,
        isError,
        registerIn,
        isErrorRegister,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
