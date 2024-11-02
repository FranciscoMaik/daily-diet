import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  date: yup.string().required("Data é obrigatório"),
  hour: yup.string().required("Hora é obrigatório"),
});
