import { useState } from "react";
import { SectionList, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import type { IListDiet } from "src/types/IListDiet";

import { formatDietToList } from "@utils/formatDietToList";

import * as S from "./styles";

export const MealList: React.FC = () => {
  const { navigate } = useNavigation();
  const [list, setList] = useState<IListDiet["list"]>([]);

  useFocusEffect(() => {
    async function getList() {
      const list = await formatDietToList();
      setList(list.list);
    }
    getList();
  });

  return (
    <SectionList
      sections={list}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={({ section }) => (
        <S.SectionTitle>{section.title.split("/").join(".")}</S.SectionTitle>
      )}
      renderItem={({ item }) => (
        <S.ItemContainer
          activeOpacity={0.7}
          onPress={() => navigate("details", { id: item.id })}
        >
          <S.Hour>{item.hour}</S.Hour>
          <S.Divider />
          <S.ContentInfo>
            <S.Description lineBreakMode="tail" numberOfLines={1}>
              {item.name}
            </S.Description>
            <S.StatusDiet inDiet={item.inDiet} />
          </S.ContentInfo>
        </S.ItemContainer>
      )}
      ListEmptyComponent={() => (
        <S.EmptyList>
          <S.EmptyListText>Nenhuma refeição encontrada</S.EmptyListText>
        </S.EmptyList>
      )}
      SectionSeparatorComponent={() => <View style={{ height: 32 }} />}
    />
  );
};
