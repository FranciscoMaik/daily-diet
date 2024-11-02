import { Alert } from "react-native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { HeaderWithLabel } from "@components/HeaderWithLabel";
import { dietDelete, dietGetOne } from "@storage/diet";
import { Button } from "@components/Button";
import { ModalDelete } from "@components/ModalDelete";

import type { IDiet } from "src/types/IDiet";

import * as S from "./styles";

const Details: React.FC = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { id } = useRoute().params as { id: string };
  const { navigate } = useNavigation();

  const [diet, setDiet] = useState<IDiet>();
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDeleteDiet = async () => {
    await dietDelete(id);
    navigate("home");
  };

  const handleEditDiet = () => {
    navigate("editDiet", { diet: diet as IDiet });
  };

  useEffect(() => {
    if (!id) return;

    const fetchDiet = async () => {
      const diet = await dietGetOne(id);
      setDiet(diet);
    };

    fetchDiet();
  }, [id]);

  return (
    <>
      <S.Container
        style={{ marginTop: top, marginBottom: bottom }}
        isDiet={diet?.inDiet ?? false}
      >
        <HeaderWithLabel title="Refeição" />
        <S.Data>
          <S.HeaderDetails>
            <S.InfoData>
              <S.Title>{diet?.name}</S.Title>
              <S.Description>{diet?.description}</S.Description>
            </S.InfoData>
            <S.InfoData>
              <S.InfoDataTitle>Data e hora</S.InfoDataTitle>
              <S.InfoDataDescription>
                {diet?.date} às {diet?.hour}
              </S.InfoDataDescription>
            </S.InfoData>
            <S.CardStatus>
              <S.DotStatus isDiet={diet?.inDiet ?? false} />
              <S.CardStatusTitle>
                {diet?.inDiet ? "dentro da dieta" : "fora da dieta"}
              </S.CardStatusTitle>
            </S.CardStatus>
          </S.HeaderDetails>

          <S.FooterDetails>
            <Button
              title="Editar refeição"
              icon="edit"
              onPress={handleEditDiet}
            />
            <Button
              title="Excluir refeição"
              icon="trash"
              variant="SECONDARY"
              onPress={() => setShowModal(true)}
            />
          </S.FooterDetails>
        </S.Data>
      </S.Container>

      <ModalDelete
        showModal={showModal}
        setShowModal={setShowModal}
        handleDeleteDiet={handleConfirmDeleteDiet}
      />
    </>
  );
};

export default Details;
