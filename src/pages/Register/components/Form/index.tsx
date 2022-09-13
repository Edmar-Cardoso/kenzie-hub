import { FormRegister } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RegisterSchema from "../../../../validations/RegisterSchema";
import { UserContext } from "../../../../context/UserContext";
import { toast } from "react-toastify";
import { useContext } from "react";

export interface IInputsRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const Form = () => {
  const { isErrorRegister, registerIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputsRegister>({
    resolver: yupResolver(RegisterSchema()),
  });

  const onError = () => {
    toast.error("Ops, algo deu errado!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      className: "modal",
    });
  };
  return (
    <FormRegister
      onSubmit={handleSubmit(registerIn, onError)}
      errors={errors}
      isError={isErrorRegister}
    >
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" placeholder="Nome" {...register("name")} />
        <span>{errors.name?.message}</span>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirmar Senha"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <input id="bio" type="text" placeholder="Bio" {...register("bio")} />
        <span>{errors.bio?.message}</span>
      </div>

      <div>
        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          type="text"
          placeholder="Contato"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>
      </div>

      <div>
        <label htmlFor="course_module">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </div>

      <button type="submit">Cadastrar</button>
    </FormRegister>
  );
};

export default Form;
