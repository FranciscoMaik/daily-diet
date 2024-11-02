import type { IDiet } from "src/types/IDiet";

export type PublicStack = {
  home: undefined;
  statistics: undefined;
  newDiet: undefined;
  details: {
    id: string;
  };
  editDiet: {
    diet: IDiet;
  };
};
