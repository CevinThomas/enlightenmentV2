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
    res.send();
  } catch (e) {}
};

export const fetchAllCategories = async (req: Request, res: Response) => {
  try {
    await fetchAllCategoriesRep();
    res.send();
  } catch (e) {}
};

export const fetchCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    await fetchCategoryRep(+categoryId);
    res.send();
  } catch (e) {}
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    await deleteCategoryRep(+categoryId);
    res.send();
  } catch (e) {}
};
