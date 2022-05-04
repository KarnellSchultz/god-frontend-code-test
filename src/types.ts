export type CarType = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export const BodyTypeFilterKeys = {
  SUV: "SUV",
  ESTATE: "SUV",
  SEDAN: "SEDAN",
  ALL: "ALL",
};

export enum CarsPerPage {
  Mobile = 1,
  Desktop = 4,
}
