import styled from "styled-components/native";

interface StyledButtonProps {
  variant: "PRIMARY" | "SECONDARY";
}

export const Container = styled.TouchableOpacity<StyledButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 24px;
  flex: 1;
  min-height: 52px;
  max-height: 52px;
  border-radius: 6px;
  background-color: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.COLORS.GRAY_2 : "transparent"};

  border: 1px solid ${({ theme, variant }) =>
    variant === "PRIMARY" ? "transparent" : theme.COLORS.GRAY_1};
`;

export const Title = styled.Text<StyledButtonProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`;
