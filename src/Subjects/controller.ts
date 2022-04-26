import { Request, Response } from "express";
import { createSubjectRep, getAllSubjectsRep } from "./repository";

export const createSubject = async (req: Request, res: Response) => {
  try {
    await createSubjectRep(req.body);
    res.status(204).send();
  } catch (e) {
    res.status(500).send();
  }
};

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    res.status(200).send(await getAllSubjectsRep());
  } catch (e) {}
};
