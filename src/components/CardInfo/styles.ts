import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`;
