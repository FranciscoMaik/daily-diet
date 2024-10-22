import styled from "styled-components/native";

interface ContainerProps {
  basePercentage: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ basePercentage, theme }) =>
    basePercentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 20px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
