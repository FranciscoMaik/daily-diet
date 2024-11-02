import { dietsGetAll } from "@storage/diet";

import type { IListDiet } from "src/types/IListDiet";

export async function formatDietToList(): Promise<IListDiet> {
  const diets = await dietsGetAll();

  const list: IListDiet["list"] = [];

  for (const diet of diets) {
    const title = diet.date;
    const data = [
      {
        id: diet.id,
        hour: diet.hour,
        name: diet.name,
        inDiet: diet.inDiet,
      },
    ];

    list.push({ title, data });
  }

  const sortedList = list.sort((a, b) => {
    return new Date(b.title).getTime() - new Date(a.title).getTime();
  });

  return { list: sortedList };
}
