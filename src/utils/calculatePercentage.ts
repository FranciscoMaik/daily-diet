import { dietsGetAll } from "@storage/diet";

export async function calculatePercentage() {
  const diets = await dietsGetAll();

  const total = diets.length;
  const inDiet = diets.filter((diet) => diet.inDiet).length;
  const outDiet = diets.filter((diet) => !diet.inDiet).length;

  const percentage = (inDiet / total) * 100;

  const bestSequence = diets.reduce((acc, diet) => {
    if (diet.inDiet) {
      return acc + 1;
    }
    return 0;
  }, 0);

  return {
    percentage: Number(percentage.toFixed(2)) || 0,
    total,
    inDiet,
    outDiet,
    bestSequence,
  };
}
