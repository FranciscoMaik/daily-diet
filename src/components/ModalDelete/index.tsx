import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { Button } from "@components/Button";

import * as S from "./styles";

interface ModalDeleteProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  handleDeleteDiet: () => void;
}

export const ModalDelete: React.FC<ModalDeleteProps> = ({
  setShowModal,
  showModal,
  handleDeleteDiet,
}) => {
  return (
    <S.Modal animationType="slide" visible={showModal} transparent={true}>
      <S.ContentModal>
        <S.Container>
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>

          <S.ContentButtons>
            <Button
              title="Cancelar"
              onPress={() => setShowModal(false)}
              variant="SECONDARY"
            />
            <Button title="Sim, excluir" onPress={handleDeleteDiet} />
          </S.ContentButtons>
        </S.Container>
      </S.ContentModal>
    </S.Modal>
  );
};
