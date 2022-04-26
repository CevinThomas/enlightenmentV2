import {
  createQuestionsRep,
  deleteQuestionRep,
  fetchAllQuestionsRep,
  fetchSingleQuestionRep,
} from "./repository";
import { Request, Response } from "express";

export const createQuestions = async (req: Request, res: Response) => {
  try {
    await createQuestionsRep(req.body);
    res.status(204).send();
  } catch (e) {}
};

export const fetchAllQuestions = async (req: Request, res: Response) => {
  try {
    await fetchAllQuestionsRep();
  } catch (e) {}
};
export const fetchSingleQuestion = async (req: Request, res: Response) => {
  try {
    await fetchSingleQuestionRep();
  } catch (e) {}
};
export const deleteQuestion = async (req: Request, res: Response) => {
  try {
    await deleteQuestionRep();
  } catch (e) {}
};
