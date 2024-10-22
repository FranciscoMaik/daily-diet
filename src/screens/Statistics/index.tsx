import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

const basePercentage = 40;

const Statistics: React.FC = () => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();
  const { COLORS } = useTheme();

  return (
    <S.Container basePercentage={basePercentage} mt={top}>
      <S.Header>
        <Feather
          name="arrow-left"
          size={28}
          color={basePercentage >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          style={{ position: "absolute", top: 24, left: 24 }}
          onPress={goBack}
        />
        <S.Title>90,86%</S.Title>
        <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
      </S.Header>

      <S.Body>
        <S.BodyTitle>Estatísticas gerais</S.BodyTitle>
      </S.Body>
    </S.Container>
  );
};

export default Statistics;
