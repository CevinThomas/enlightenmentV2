import { Request, Response } from "express";
import { createChoiceRep } from "./repository";

export const createChoices = async (req: Request, res: Response) => {
  try {
    await createChoiceRep(req.body);
    res.status(204).send();
  } catch (e) {}
};
