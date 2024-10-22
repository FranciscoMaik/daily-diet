import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

const basePercentage = 50;

export const Percentage: React.FC = () => {
  const { navigate } = useNavigation();
  const { COLORS } = useTheme();

  return (
    <S.Container basePercentage={basePercentage}>
      <Feather
        name="arrow-up-right"
        size={28}
        color={basePercentage >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
        style={{ position: "absolute", top: 8, right: 8 }}
        onPress={() => navigate("statistics")}
      />
      <S.Title>90,86%</S.Title>
      <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
    </S.Container>
  );
};
