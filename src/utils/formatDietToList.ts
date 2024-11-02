import { dietsGetAll } from "@storage/diet";
import type { IDiet } from "src/types/IDiet";

import type { IListDiet } from "src/types/IListDiet";

export async function formatDietToList(): Promise<IListDiet> {
  const diets = await dietsGetAll();

  const groupedByDate: { [key: string]: typeof diets } = {};

  for (const diet of diets) {
    if (!groupedByDate[diet.date]) {
      groupedByDate[diet.date] = [];
    }
    groupedByDate[diet.date].push(diet);
  }

  const list: IListDiet["list"] = Object.entries(groupedByDate).map(
    ([date, diets]) => ({
      title: date,
      data: diets
        .map((diet) => ({
          id: diet.id,
          hour: diet.hour,
          name: diet.name,
          inDiet: diet.inDiet,
        }))
        .sort((a, b) => {
          const [hoursA, minutesA] = a.hour.split(":").map(Number);
          const [hoursB, minutesB] = b.hour.split(":").map(Number);
          return hoursA * 60 + minutesA - (hoursB * 60 + minutesB);
        }),
    }),
  );

  const sortedList = list.sort((a, b) => {
    const [dayA, monthA, yearA] = a.title.split("/").map(Number);
    const [dayB, monthB, yearB] = b.title.split("/").map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateB.getTime() - dateA.getTime();
  });

  return { list: sortedList };
}
