import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  flex: 1;
`;

export const Data = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 40px 24px;
`;
