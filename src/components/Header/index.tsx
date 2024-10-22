import { ImageBackground, View } from "react-native";

import Logo from "@assets/Logo.svg";
import { Percentage } from "@components/Percentage";

import * as S from "./styles";

const imagem = {
  uri: "https://avatars.githubusercontent.com/u/20601076?s=400&u=2b0e4e3d959488aa862bccb3256c17869ab807bf&v=4",
};

export const Header: React.FC = () => {
  return (
    <View style={{ gap: 32 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Logo width={82} height={37} />
        <S.Logo source={imagem} />
      </View>
      <Percentage />
    </View>
  );
};
