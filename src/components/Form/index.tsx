import { useState } from "react";
import { Alert } from "react-native";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";

import type { IDiet } from "src/types/IDiet";
import { InputWithLabel } from "@components/InputWithLabel";
import { Button } from "@components/Button";
import { ButtonSelect } from "@components/ButtonSelect";

import { ModalConfirmation } from "@components/ModalConfirmation";
import { dietCreate, dietUpdate } from "@storage/diet";

import { schema } from "./schema";

import * as S from "./styles";
interface FormProps {
  diet?: IDiet;
}

export const Form: React.FC<FormProps> = ({ diet }) => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState(diet?.name || "");
  const [description, setDescription] = useState(diet?.description || "");
  const [date, setDate] = useState(diet?.date || "");
  const [hour, setHour] = useState(diet?.hour || "");
  const [inDiet, setInDiet] = useState<"yes" | "not">(
    diet?.inDiet ? "yes" : "not",
  );

  const handleSelect = (item: "yes" | "not") => {
    if (item !== inDiet) {
      setInDiet(item);
    }
  };

  const handleChangeDate = (text: string) => {
    const format = text
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})(\d)/, "$1/$2/$3");
    setDate(format);
  };

  const handleChangeHour = (text: string) => {
    const format = text.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1:$2");
    setHour(format);
  };

  const handleSave = async () => {
    try {
      await schema.validate({ name, description, date, hour });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert("Erro", error.message);
      }
    }
    if (diet) {
      try {
        await dietUpdate({
          ...diet,
          name,
          description,
          date,
          hour,
          inDiet: inDiet === "yes",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await dietCreate({
          id: uuidv4(),
          name,
          description,
          date,
          hour,
          inDiet: inDiet === "yes",
        });
      } catch (error) {
        console.log(error);
      }
    }
    setShowModal(true);
  };

  return (
    <>
      <S.Container>
        <S.BaseForm>
          <InputWithLabel
            label="Nome"
            value={name}
            onChangeText={setName}
            placeholder="Ex: Sanduíche de atum"
          />
          <InputWithLabel
            label="Descrição"
            numberOfLines={4}
            multiline={true}
            value={description}
            onChangeText={setDescription}
            placeholder="Ex: Sanduíche de atum, 100g de arroz, 250ml de água..."
          />
          <S.ContentDate>
            <InputWithLabel
              label="Data"
              value={date}
              onChangeText={handleChangeDate}
              maxLength={10}
              placeholder="Ex: 12/08/2024"
            />
            <InputWithLabel
              label="Hora"
              value={hour}
              onChangeText={handleChangeHour}
              maxLength={5}
              placeholder="Ex: 12:00"
            />
          </S.ContentDate>
          <ButtonSelect itemSelected={inDiet} onSelect={handleSelect} />
        </S.BaseForm>

        <Button
          title={diet ? "Salvar alterações" : "Cadastrar refeição"}
          onPress={handleSave}
        />
      </S.Container>

      <ModalConfirmation
        inDiet={inDiet === "yes"}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};
