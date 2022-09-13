import { ITech } from "../context/TechContext";
import api from "./api";

export interface IDataAddTech {
  title: string;
  status: string;
}

const addTechsRequisition = async (dataBase: IDataAddTech): Promise<ITech> => {
  const token_token = localStorage.getItem("@TOKEN");

  const { data } = await api.post<ITech>("/users/techs", dataBase, {
    headers: { Authorization: `Bearer ${token_token}` },
  });
  return data;
};

export default addTechsRequisition;
