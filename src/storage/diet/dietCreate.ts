import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storageConfig";

import type { IDiet } from "src/types/IDiet";

import { dietsGetAll } from "./dietsGetAll";

export async function dietCreate(data: IDiet) {
  try {
    const storedDiets = await dietsGetAll();

    const storage = JSON.stringify([...storedDiets, data]);

    await AsyncStorage.setItem(DIET_COLLECTION, storage);
  } catch {
    throw new Error("Error saving diet");
  }
}
