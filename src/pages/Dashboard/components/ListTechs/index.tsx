import { useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import { ITech, TechContext } from "../../../../context/TechContext";
import { Container } from "./style";
import { ToastContainer } from "react-toastify";
import ContainerAnimations from "../../../../components/ContainerAnimations";
import { AnimatePresence } from "framer-motion";

interface IPropsListTechs {
  techs: ITech[];
}

const ListTechs = ({ techs }: IPropsListTechs) => {
  const { deleteTech } = useContext(TechContext);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <ContainerAnimations>
          <Container>
            {techs.length > 0 ? (
              techs.map((tech) => (
                <ContainerAnimations key={tech.id}>
                  <div className="containerTech">
                    <h4>{tech.title}</h4>
                    <div>
                      <span>{tech.status}</span>
                      <button type="button" onClick={() => deleteTech(tech.id)}>
                        <BsTrashFill className="icon" />
                      </button>
                    </div>
                  </div>
                </ContainerAnimations>
              ))
            ) : (
              <p>Adicione tecnologias...</p>
            )}
          </Container>
        </ContainerAnimations>
      </AnimatePresence>
      <ToastContainer />
    </>
  );
};

export default ListTechs;
