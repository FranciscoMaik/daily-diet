import { SectionList, View } from "react-native";

import * as S from "./styles";

interface ListProps {
  list: Array<{
    title: string;
    data: Array<{
      id: string;
      hour: string;
      name: string;
      inDiet: boolean;
    }>;
  }>;
}

const mockList: ListProps["list"] = [
  {
    title: new Date().toLocaleDateString(),
    data: [
      {
        id: "1",
        hour: "08:00",
        name: "Café preto sem açúcar",
        inDiet: true,
      },
      {
        id: "2",
        hour: "08:30",
        name: "Pão integral com queijo branco",
        inDiet: true,
      },
    ],
  },
  {
    title: new Date("2024-10-02").toLocaleDateString(),
    data: [
      {
        id: "3",
        hour: "12:00",
        name: "Arroz, feijão, frango grelhado e salada",
        inDiet: true,
      },
    ],
  },
  {
    title: new Date("2024-10-03").toLocaleDateString(),
    data: [
      {
        id: "4",
        hour: "15:00",
        name: "Frutas da estação",
        inDiet: false,
      },
    ],
  },
];

export const MealList: React.FC = () => {
  return (
    <SectionList
      sections={mockList}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section }) => (
        <S.SectionTitle>{section.title}</S.SectionTitle>
      )}
      renderItem={({ item }) => (
        <S.ItemContainer activeOpacity={0.7}>
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
      SectionSeparatorComponent={() => <View style={{ height: 32 }} />}
    />
  );
};
