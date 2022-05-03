import type { NextApiRequest, NextApiResponse } from "next";

import cars from "./cars.json";

export const getCars = () => Promise.resolve(cars)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cars);
}
