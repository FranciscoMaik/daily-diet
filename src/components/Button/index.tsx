import type { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: keyof typeof Feather.glyphMap;
}

export const Button: React.FC<ButtonProps> = ({ title, icon, ...rest }) => {
  return (
    <S.Container {...rest} activeOpacity={0.7}>
      {icon ? <Feather name={icon} size={18} color="#fff" /> : null}
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
