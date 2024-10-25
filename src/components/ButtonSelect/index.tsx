import { useTheme } from "styled-components/native";

import * as S from "./styles";

interface ButtonSelectProps {
  itemSelected: "yes" | "not";
  onSelect: (item: "yes" | "not") => void;
}

export const ButtonSelect: React.FC<ButtonSelectProps> = ({
  itemSelected,
  onSelect,
}) => {
  const { COLORS } = useTheme();

  return (
    <S.Content>
      <S.Title>Está dentro da dieta?</S.Title>
      <S.Container>
        <S.YesButton
          isSelected={itemSelected === "yes"}
          onPress={() => onSelect("yes")}
        >
          <S.Dot style={{ backgroundColor: COLORS.GREEN_DARK }} />
          <S.ButtonText>Sim</S.ButtonText>
        </S.YesButton>

        <S.NotButton
          isSelected={itemSelected === "not"}
          onPress={() => onSelect("not")}
        >
          <S.Dot style={{ backgroundColor: COLORS.RED_DARK }} />
          <S.ButtonText>Não</S.ButtonText>
        </S.NotButton>
      </S.Container>
    </S.Content>
  );
};
