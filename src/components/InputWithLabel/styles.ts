import styled from "styled-components/native";

export const Container = styled.View`
  gap: 8px;
  flex: 1;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  padding: 14px;
  flex: 1;
`;
