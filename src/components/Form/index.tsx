import type { IDiet } from "src/types/IDiet";

import { InputWithLabel } from "@components/InputWithLabel";
import { Button } from "@components/Button";

import * as S from "./styles";
import { useWindowDimensions } from "react-native";

interface FormProps {
  diet?: IDiet;
}

export const Form: React.FC<FormProps> = ({ diet }) => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <S.BaseForm>
        <InputWithLabel label="Nome" />
        <InputWithLabel label="Descrição" numberOfLines={4} multiline={true} />
        <S.ContentDate>
          <InputWithLabel label="Data" />
          <InputWithLabel label="Hora" />
        </S.ContentDate>
      </S.BaseForm>

      <Button title="Cadastrar refeição" />
    </S.Container>
  );
};
