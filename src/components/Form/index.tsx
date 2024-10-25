import { useState } from "react";
import { useWindowDimensions } from "react-native";

import type { IDiet } from "src/types/IDiet";

import { InputWithLabel } from "@components/InputWithLabel";
import { Button } from "@components/Button";
import { ButtonSelect } from "@components/ButtonSelect";

import * as S from "./styles";
interface FormProps {
  diet?: IDiet;
}

export const Form: React.FC<FormProps> = ({ diet }) => {
  const { width } = useWindowDimensions();

  const [name, setName] = useState(diet?.name || "");
  const [description, setDescription] = useState(diet?.description || "");
  const [date, setDate] = useState(diet?.date || "");
  const [hour, setHour] = useState(diet?.hour || "");
  const [inDiet, setInDiet] = useState<"yes" | "not">("yes");

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

  return (
    <S.Container>
      <S.BaseForm>
        <InputWithLabel label="Nome" value={name} onChangeText={setName} />
        <InputWithLabel
          label="Descrição"
          numberOfLines={4}
          multiline={true}
          value={description}
          onChangeText={setDescription}
        />
        <S.ContentDate>
          <InputWithLabel
            label="Data"
            value={date}
            onChangeText={handleChangeDate}
            maxLength={10}
          />
          <InputWithLabel
            label="Hora"
            value={hour}
            onChangeText={handleChangeHour}
            maxLength={5}
          />
        </S.ContentDate>
        <ButtonSelect itemSelected={inDiet} onSelect={handleSelect} />
      </S.BaseForm>

      <Button title="Cadastrar refeição" />
    </S.Container>
  );
};
