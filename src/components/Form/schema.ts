import * as yup from "yup";

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
  date: yup
    .string()
    .required("Data é obrigatório")
    .matches(dateRegex, "Data deve estar no formato DD/MM/YYYY")
    .test("is-valid-date", "Data inválida", (value) => {
      if (!value) return false;
      const [day, month, year] = value.split("/").map(Number);
      const date = new Date(year, month - 1, day);

      return (
        date instanceof Date &&
        !Number.isNaN(date.getTime()) &&
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
      );
    }),
  hour: yup
    .string()
    .required("Hora é obrigatório")
    .matches(timeRegex, "Hora deve estar no formato HH:mm"),
});
