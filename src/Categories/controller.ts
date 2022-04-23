import { Request, Response } from "express";
import {
  createCategoryRep,
  deleteCategoryRep,
  fetchAllCategoriesRep,
  fetchCategoryRep,
} from "./repository";

export const createCategory = async (req: Request, res: Response) => {
  try {
    await createCategoryRep(req.body);
    res.status(204).send();
  } catch (e) {}
};

export const fetchAllCategories = async (req: Request, res: Response) => {
  try {
    res.send(await fetchAllCategoriesRep());
  } catch (e) {}
};

export const fetchCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    res.send(await fetchCategoryRep(+categoryId));
  } catch (e) {}
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    res.send(await deleteCategoryRep(+categoryId));
  } catch (e) {}
};
