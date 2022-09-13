import { IUser } from "../context/UserContext";
import api from "./api";

interface IResponseLogin {
  user: IUser;
  token: string;
}

export interface IDataBaseLogin {
  email: string;
  password: string;
}

const loginRequisition = async (
  dataBase: IDataBaseLogin
): Promise<IResponseLogin> => {
  const { data } = await api.post<IResponseLogin>("/sessions", dataBase);

  return data;
};

export default loginRequisition;
