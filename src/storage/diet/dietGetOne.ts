import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storageConfig";

import type { IDiet } from "src/types/IDiet";

export async function dietGetOne(id: string) {
  const storage = await AsyncStorage.getItem(DIET_COLLECTION);

  const diets: IDiet[] = storage ? JSON.parse(storage) : [];

  return diets.find((diet) => diet.id === id);
}
