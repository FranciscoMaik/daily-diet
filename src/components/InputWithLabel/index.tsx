import type { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

interface InputWithLabelProps extends TextInputProps {
  label: string;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  multiline,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <S.Container style={{ minHeight: multiline ? 120 : 70 }}>
      <S.Label>{label}</S.Label>
      <S.Input
        multiline={multiline}
        {...rest}
        placeholderTextColor={theme.COLORS.GRAY_4}
      />
    </S.Container>
  );
};
