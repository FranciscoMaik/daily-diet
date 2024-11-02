import AsyncStorage from "@react-native-async-storage/async-storage";

import { DIET_COLLECTION } from "@storage/storageConfig";
import { dietsGetAll } from "./dietsGetAll";

export async function dietDelete(id: string) {
  try {
    const storedDiets = await dietsGetAll();

    const storage = JSON.stringify(
      storedDiets.filter((diet) => diet.id !== id),
    );

    await AsyncStorage.setItem(DIET_COLLECTION, storage);
  } catch {
    throw new Error("Error deleting diet");
  }
}
