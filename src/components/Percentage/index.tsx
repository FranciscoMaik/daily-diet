import { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";

import { calculatePercentage } from "@utils/calculatePercentage";

import * as S from "./styles";

export const Percentage: React.FC = () => {
  const { navigate } = useNavigation();
  const { COLORS } = useTheme();

  const [percentage, setPercentage] = useState(0);

  useFocusEffect(() => {
    async function getPercentage() {
      const { percentage } = await calculatePercentage();
      setPercentage(percentage);
    }

    getPercentage();
  });

  return (
    <S.Container basePercentage={percentage}>
      <Feather
        name="arrow-up-right"
        size={28}
        color={percentage >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
        style={{ position: "absolute", top: 8, right: 8 }}
        onPress={() => navigate("statistics")}
      />
      <S.Title>{percentage.toFixed(2)}%</S.Title>
      <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
    </S.Container>
  );
};
