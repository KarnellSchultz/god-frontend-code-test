export type CarType = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export const BodyTypes = {
  ESTATE: "ESTATE",
  SEDAN: "SEDAN",
  SUV: "SUV",
  ALL: "ALL",
} as const;

export type BodyTypeKeysType = typeof BodyTypes[keyof typeof BodyTypes];

export const CarsPerPage = {
  Mobile: 1,
  Desktop: 4,
} as const;
