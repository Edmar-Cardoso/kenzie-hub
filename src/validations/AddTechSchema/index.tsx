import * as yup from "yup";

const AddTechSchema = () => {
  return yup.object().shape({
    title: yup.string().required("Nome Obrigatório"),
  });
};

export default AddTechSchema;
