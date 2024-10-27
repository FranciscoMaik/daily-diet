import styled from "styled-components/native";

export const Modal = styled.Modal`
  flex: 1;
`;

export const ContentModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const HeaderModal = styled.View`
  align-items: center;
  gap: 8px;
  padding: 0px 24px;
`;

interface TitleProps {
  inDiet: boolean;
}

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme, inDiet }) => (inDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  text-align: center;
`;

export const Image = styled.Image``;
