import { Header } from "@components/Header";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as S from "./styles";

const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <S.Container style={{ marginTop: top }}>
      <Header />
    </S.Container>
  );
};

export default Home;
