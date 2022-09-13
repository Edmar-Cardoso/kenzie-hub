import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import getTechsRequisition from "../services/getTechsRequisition";
import addTechsRequisition, {
  IDataAddTech,
} from "../services/addTechsRequisition";
import deleteTechsRequisition from "../services/deleteTechsRequisition";

interface IPropsProviderstech {
  children: ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ITechContext {
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  addTech: (data: IDataAddTech) => void;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  techs: ITech[];
  listandoTechs: () => void;
  deleteTech: (idTech: string) => void;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

const Providerstech = ({ children }: IPropsProviderstech) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [techs, setTechs] = useState<ITech[]>([]);

  const listandoTechs = () => {
    getTechsRequisition().then((response) => {
      setTechs([...response.techs]);
    });
  };

  const addTech = (data: IDataAddTech) => {
    addTechsRequisition(data)
      .then((response) => {
        toast.success("Tecnologia cadastrada com sucesso!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          className: "modal",
        });

        setIsError(false);
        setOpenModal(false);
        setTechs([...techs, response]);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Nome da tecnologia já em uso!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          className: "modal",
        });
        setIsError(true);
      });
  };

  const deleteTech = (idTech: string) => {
    deleteTechsRequisition(idTech)
      .then((response) => {
        toast.success("Tecnologia apagada com sucesso!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          className: "modal",
        });

        const newListTechs = techs.filter((tech) => tech.id !== idTech);

        setTechs(newListTechs);
      })
      .catch((error) => console.log(error));
  };

  return (
    <TechContext.Provider
      value={{
        isError,
        setIsError,
        addTech,
        openModal,
        setOpenModal,
        techs,
        listandoTechs,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default Providerstech;
