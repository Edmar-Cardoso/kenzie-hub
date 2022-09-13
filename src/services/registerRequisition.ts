import { IUser } from "../context/UserContext";
import api from "./api";

export interface IDataBaseRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  bio: string;
  contact: string;
  course_module: string;
}

const registerRequisition = async (
  dataBase: IDataBaseRegister
): Promise<IUser> => {
  const { data } = await api.post<IUser>("/users", dataBase);
  return data;
};

export default registerRequisition;
