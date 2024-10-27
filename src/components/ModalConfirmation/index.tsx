import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";

import InDiet from "@assets/inDiet.png";
import NotInDiet from "@assets/outDiet.png";

import { descriptionModal, titleModal } from "./constants";

import * as S from "./styles";

interface ModalConfirmationProps {
  inDiet: boolean;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const ModalConfirmation: React.FC<ModalConfirmationProps> = ({
  inDiet,
  setShowModal,
  showModal,
}) => {
  const { navigate } = useNavigation();

  const handleNavigate = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate("home");
    }, 500);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <S.Modal animationType="slide" visible={showModal}>
          <S.ContentModal>
            <S.HeaderModal>
              <S.Title inDiet={inDiet}>
                {inDiet ? titleModal.inDiet : titleModal.outDiet}
              </S.Title>
              <S.Description>
                {inDiet ? descriptionModal.inDiet : descriptionModal.outDiet}
              </S.Description>
            </S.HeaderModal>

            <S.Image source={inDiet ? InDiet : NotInDiet} />

            <Button title="Ir para a página inicial" onPress={handleNavigate} />
          </S.ContentModal>
        </S.Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
