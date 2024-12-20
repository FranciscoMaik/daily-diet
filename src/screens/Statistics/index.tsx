import { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "styled-components/native";
import { CardInfo } from "@components/CardInfo";
import { calculatePercentage } from "@utils/calculatePercentage";

import * as S from "./styles";

const Statistics: React.FC = () => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();
  const { COLORS } = useTheme();

  const [percentage, setPercentage] = useState(0);
  const [total, setTotal] = useState(0);
  const [inDiet, setInDiet] = useState(0);
  const [outDiet, setOutDiet] = useState(0);
  const [bestSequence, setBestSequence] = useState(0);
  useEffect(() => {
    async function getPercentage() {
      const { percentage, total, inDiet, outDiet, bestSequence } =
        await calculatePercentage();
      setPercentage(percentage);
      setTotal(total);
      setInDiet(inDiet);
      setOutDiet(outDiet);
      setBestSequence(bestSequence);
    }

    getPercentage();
  }, []);

  return (
    <S.Container basePercentage={percentage} mt={top}>
      <S.Header>
        <Feather
          name="arrow-left"
          size={28}
          color={percentage >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          style={{ position: "absolute", top: 24, left: 24 }}
          onPress={goBack}
        />
        <S.Title>{percentage.toFixed(2)}%</S.Title>
        <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
      </S.Header>

      <S.Body>
        <S.BodyTitle>Estatísticas gerais</S.BodyTitle>
        <S.ContentInfos>
          <CardInfo
            value={bestSequence.toString()}
            title="melhor sequência de pratos dentro da dieta"
            background={COLORS.GRAY_6}
          />
          <CardInfo
            value={total.toString()}
            title="refeições registradas"
            background={COLORS.GRAY_6}
          />
          <S.RowInfo>
            <CardInfo
              value={inDiet.toString()}
              title="refeições dentro da dieta"
              background={COLORS.GREEN_LIGHT}
            />
            <CardInfo
              value={outDiet.toString()}
              title="refeições fora da dieta"
              background={COLORS.RED_LIGHT}
            />
          </S.RowInfo>
        </S.ContentInfos>
      </S.Body>
    </S.Container>
  );
};

export default Statistics;
