import { Link } from "react-router-dom";
import ContainerAnimations from "../../components/ContainerAnimations";
import Form from "./components/Form";
import { Container } from "./style";

const Login = () => {
  return (
    <ContainerAnimations>
      <Container>
        <img src={require("../../assets/imgs/logo.png")} alt="" />
        <div className="container-form">
          <h2>Login</h2>
          <Form />
          <div>
            <p>Ainda não possui uma conta?</p>
            <Link className="link" to={"/register"}>
              Cadastre-se
            </Link>
          </div>
        </div>
      </Container>
    </ContainerAnimations>
  );
};

export default Login;
