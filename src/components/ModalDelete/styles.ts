import styled from "styled-components/native";

export const Modal = styled.Modal`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContentModal = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0px 24px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  gap: 32px;
  border-radius: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  text-align: center;
`;

export const ContentButtons = styled.View`
  align-items: center;
  gap: 8px;
  padding: 0px 24px;
  flex-direction: row;
  width: 100%;
`;
