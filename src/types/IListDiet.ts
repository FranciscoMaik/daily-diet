export interface IListDiet {
  list: Array<{
    title: string;
    data: Array<{
      id: string;
      hour: string;
      name: string;
      inDiet: boolean;
    }>;
  }>;
}
