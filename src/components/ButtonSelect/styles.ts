import styled, { css } from "styled-components/native";

export const Content = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`;

const BaseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 49%;

  border-radius: 6px;
  border-width: 1px;

  padding: 16px;
  gap: 8px;
`;

interface YesButtonProps {
  isSelected: boolean;
}

export const YesButton = styled(BaseButton)<YesButtonProps>`
  ${({ theme, isSelected }) => css`
    background-color: ${isSelected ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_6};
    border-color: ${isSelected ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_6};
  `}
`;

interface NotButtonProps {
  isSelected: boolean;
}

export const NotButton = styled(BaseButton)<NotButtonProps>`
  ${({ theme, isSelected }) => css`
    background-color: ${isSelected ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6};
    border-color: ${isSelected ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_6};
  `}
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Dot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;
