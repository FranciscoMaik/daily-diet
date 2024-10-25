import { useTheme } from "styled-components/native";
import * as S from "./styles";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

interface HeaderWithLabelProps {
  title: string;
}

export const HeaderWithLabel: React.FC<HeaderWithLabelProps> = ({ title }) => {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <S.Container>
      <Feather
        name="arrow-left"
        size={24}
        color={COLORS.GRAY_2}
        onPress={handleGoBack}
      />
      <S.Title>{title}</S.Title>
      <View style={{ width: 24 }} />
    </S.Container>
  );
};
