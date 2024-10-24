import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  gap: 32px;
`;

export const ContentButton = styled.View`
  gap: 8px;
`;

export const TitleSection = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
