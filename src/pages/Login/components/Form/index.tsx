/* import { useHistory } from "react-router-dom"; */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "../../../../validations/LoginSchema";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormStyled } from "./style";

export interface IInputsLogin {
  email: string;
  password: string;
}

const Form = () => {
  const { loginIn, isError } = useContext(UserContext);

  const schema = LoginSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputsLogin>({
    resolver: yupResolver(schema),
  });

  const onErro = () => {
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
    <>
      <FormStyled
        onSubmit={handleSubmit(loginIn, onErro)}
        errors={errors}
        isError={isError}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          <span className="messageError">{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <span className="messageError">{errors.password?.message}</span>
        </div>

        <button type="submit">Entrar</button>
      </FormStyled>
      <ToastContainer />
    </>
  );
};

export default Form;
