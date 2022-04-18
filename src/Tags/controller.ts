import { Request, Response } from "express";
import {
  createTagRep,
  deleteTagRep,
  fetchAllTagsRep,
  fetchSingleTagRep,
} from "./repository";

export const createTag = async (req: Request, res: Response) => {
  try {
    await createTagRep(req.body);
  } catch (e) {}
};
export const fetchAllTags = async (req: Request, res: Response) => {
  try {
    await fetchAllTagsRep();
  } catch (e) {}
};
export const fetchSingleTag = async (req: Request, res: Response) => {
  try {
    const { tagId } = req.params;
    await fetchSingleTagRep(+tagId);
  } catch (e) {}
};
export const deleteTag = async (req: Request, res: Response) => {
  try {
    const { tagId } = req.params;

    await deleteTagRep(+tagId);
  } catch (e) {}
};
