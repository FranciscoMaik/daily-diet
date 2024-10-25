import styled, { css } from "styled-components/native";

export const Container = styled.View`

`;

export const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-bottom: 14px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;

  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_5};

  gap: 12px;

  padding: 12px 14px 16px 14px;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Divider = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  width: 90%;
`;

interface StatusDietProps {
  inDiet: boolean;
}

export const StatusDiet = styled.View<StatusDietProps>`
  ${({ theme, inDiet }) => css`
    width: 14px;
    height: 14px;
    border-radius: 50%  ;
    background-color: ${inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  `}
`;
