import Form from "./components/Form";
import Header from "../../components/Header";
import ContainerAnimations from "../../components/ContainerAnimations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./style";

const Register = () => (
  <ContainerAnimations>
    <Container>
      <Header heigth={360}>Voltar</Header>

      <main className="container-main">
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <Form />
      </main>

      <ToastContainer />
    </Container>
  </ContainerAnimations>
);

export default Register;
