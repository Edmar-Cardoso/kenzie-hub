import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TechContext } from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";
import Header from "../../components/Header";
import Modal from "./components/Modal";
import ContainerAnimations from "../../components/ContainerAnimations";
import ListTechs from "./components/ListTechs";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { Container } from "./style";

const Dashboard = () => {
  const { user, loading } = useContext(UserContext);
  const { openModal, setOpenModal, techs, listandoTechs } =
    useContext(TechContext);

  const history = useHistory();

  useEffect(() => {
    listandoTechs();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <>
      {user.id ? (
        <ContainerAnimations>
          <Container>
            <Header heigth={820}>Sair</Header>

            <div className="divUser">
              <div className="containerUser">
                <span className="userName">{user.name}</span>

                <span className="userModule">{user.course_module}</span>
              </div>
            </div>
            <main>
              <div className="headerTechs">
                <h3>Tecnologias</h3>
                <button onClick={() => setOpenModal(true)}>
                  <AiOutlinePlus className="icon" />
                </button>
              </div>
              <ListTechs techs={techs} />
            </main>
          </Container>

          <AnimatePresence>{openModal && <Modal />}</AnimatePresence>
        </ContainerAnimations>
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default Dashboard;
