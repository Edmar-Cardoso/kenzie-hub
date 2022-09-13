import { IUser } from "../context/UserContext";
import api from "./api";

const getTechsRequisition = async (): Promise<IUser> => {
  const token_token = localStorage.getItem("@TOKEN");

  const { data } = await api.get<IUser>("/profile", {
    headers: { Authorization: `Bearer ${token_token}` },
  });

  return data;
};

export default getTechsRequisition;
