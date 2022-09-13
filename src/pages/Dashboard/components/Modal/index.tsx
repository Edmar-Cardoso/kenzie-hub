import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ContainerAnimations from "../../../../components/ContainerAnimations";
import { AiOutlineClose } from "react-icons/ai";
import { ContainerModal, Form } from "./style";
import AddTechSchema from "../../../../validations/AddTechSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TechContext } from "../../../../context/TechContext";

export interface IInputsModal {
  title: string;
  status: string;
}

const Modal = () => {
  const { isError, addTech, setOpenModal } = useContext(TechContext);

  const schema = AddTechSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputsModal>({
    resolver: yupResolver(schema),
  });

  const errorOn = () => {
    toast.error("Está faltando campos!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      className: "modal",
    });
  };

  return (
    <ContainerAnimations>
      <ContainerModal>
        <div className="pseudoContainer">
          <div className="headerModal">
            <span>Cadastrar tecnologia</span>
            <button type="button" onClick={() => setOpenModal(false)}>
              <AiOutlineClose className="icon" />
            </button>
          </div>
          <div className="mainModal">
            <Form
              onSubmit={handleSubmit(addTech, errorOn)}
              isError={isError}
              error={errors}
            >
              <div className="divInfoForm">
                <label htmlFor="title">Nome</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Nome da tecnologia"
                  {...register("title")}
                />
                <span>{errors.title?.message}</span>
              </div>

              <div className="divInfoForm">
                <label htmlFor="status">Selecionar status</label>
                <select id="status" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>

              <button>Cadastrar tecnologia</button>
            </Form>
          </div>
        </div>
        <ToastContainer />
      </ContainerModal>
    </ContainerAnimations>
  );
};

export default Modal;
