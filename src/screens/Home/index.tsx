import { Header } from "@components/Header";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as S from "./styles";
import { Button } from "@components/Button";

const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <S.Container style={{ marginTop: top }}>
      <Header />
      <S.ContentButton>
        <S.TitleSection>Refeições</S.TitleSection>
        <Button title="Nova refeição" icon="plus" />
      </S.ContentButton>
    </S.Container>
  );
};

export default Home;
