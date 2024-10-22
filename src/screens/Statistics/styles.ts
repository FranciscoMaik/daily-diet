import styled from "styled-components/native";

interface ContainerProps {
  basePercentage: number;
  mt: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ basePercentage, theme }) =>
    basePercentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  margin-top: ${({ mt }) => mt}px;
`;

export const Header = styled.View`
  padding: 20px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};

  flex: 1;
  align-items: center;

  border-top-right-radius: 32px;
  border-top-left-radius: 32px;

  margin-top: -16px;
  padding: 32px 24px;
`;

export const BodyTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;
