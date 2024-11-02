import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storageConfig";

import type { IDiet } from "src/types/IDiet";

export async function dietsGetAll() {
  const storage = await AsyncStorage.getItem(DIET_COLLECTION);

  const diets: IDiet[] = storage ? JSON.parse(storage) : [];

  return diets;
}
