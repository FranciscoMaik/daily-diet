import { Header } from "@components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as S from "./styles";
import { Button } from "@components/Button";
import { MealList } from "@components/MealList";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { navigate } = useNavigation();

  return (
    <S.Container style={{ marginTop: top }}>
      <Header />

      <S.ContentButton>
        <S.TitleSection>Refeições</S.TitleSection>
        <Button
          title="Nova refeição"
          icon="plus"
          onPress={() => navigate("newDiet")}
        />
      </S.ContentButton>

      <MealList />
    </S.Container>
  );
};

export default Home;
