import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storageConfig";

import type { IDiet } from "src/types/IDiet";

import { dietsGetAll } from "./dietsGetAll";

export async function dietUpdate(diet: IDiet) {
  const storedDiets = await dietsGetAll();
  const storage = JSON.stringify(
    storedDiets.map((storedDiet) =>
      storedDiet.id === diet.id ? diet : storedDiet,
    ),
  );

  try {
    await AsyncStorage.setItem(DIET_COLLECTION, storage);
  } catch {
    throw new Error("Error updating diet");
  }
}
