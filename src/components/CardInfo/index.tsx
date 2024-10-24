import * as S from "./styles";

interface CardInfoProps {
  value: string;
  title: string;
  background: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({
  background,
  title,
  value,
}) => {
  return (
    <S.Container style={{ backgroundColor: background }}>
      <S.Value>{value}</S.Value>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
