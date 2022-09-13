import api from "./api";

const deleteTechsRequisition = async (idTech: string): Promise<string> => {
  const token_token = localStorage.getItem("@TOKEN");

  const { data } = await api.delete<string>(`/users/techs/${idTech}`, {
    headers: { Authorization: `Bearer ${token_token}` },
  });
  return data;
};

export default deleteTechsRequisition;
