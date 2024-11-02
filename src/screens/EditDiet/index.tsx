import { HeaderWithLabel } from "@components/HeaderWithLabel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";

import type { IDiet } from "src/types/IDiet";

import { Form } from "@components/Form";

import * as S from "./styles";

const NewDiet: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { params } =
    useRoute<RouteProp<{ params: { diet: IDiet } }, "params">>();
  const { diet } = params;

  return (
    <S.Container style={{ marginTop: top }}>
      <HeaderWithLabel title="Editar Refeição" />
      <S.Data>
        <Form diet={diet} />
      </S.Data>
    </S.Container>
  );
};

export default NewDiet;
