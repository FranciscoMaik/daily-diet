import { HeaderWithLabel } from "@components/HeaderWithLabel";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Form } from "@components/Form";

import * as S from "./styles";

const NewDiet: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <S.Container style={{ marginTop: top }}>
      <HeaderWithLabel title="Nova Refeição" />
      <S.Data>
        <Form />
      </S.Data>
    </S.Container>
  );
};

export default NewDiet;
