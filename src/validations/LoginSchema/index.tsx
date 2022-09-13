import * as yup from "yup";

const LoginSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Informe um email válido"),
    password: yup.string().required("Senha obrigatória"),
  });
};

export default LoginSchema;
