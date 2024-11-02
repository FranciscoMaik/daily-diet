import styled from "styled-components/native";

interface ContainerProps {
  isDiet: boolean;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`;

export const Data = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  flex: 1;
  justify-content: space-between;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 40px 24px;
`;

export const HeaderDetails = styled.View`
  gap: 24px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const InfoData = styled.View`
  gap: 8px;
`;

export const InfoDataTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const InfoDataDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const CardStatus = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  gap: 8px;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  border-radius: 1000px;
`;

interface DotStatusProps {
  isDiet: boolean;
}

export const DotStatus = styled.View<DotStatusProps>`
  background-color: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  border-radius: 9999px;
`;

export const CardStatusTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const FooterDetails = styled.View`
  gap: 8px;
`;
