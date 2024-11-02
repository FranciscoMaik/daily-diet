import type { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: keyof typeof Feather.glyphMap;
  variant?: "PRIMARY" | "SECONDARY";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  variant = "PRIMARY",
  ...rest
}) => {
  const theme = useTheme();

  return (
    <S.Container {...rest} activeOpacity={0.7} variant={variant}>
      {icon ? (
        <Feather
          name={icon}
          size={18}
          color={
            variant === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1
          }
        />
      ) : null}
      <S.Title variant={variant}>{title}</S.Title>
    </S.Container>
  );
};
