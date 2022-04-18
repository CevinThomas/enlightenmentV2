import { Request, Response } from "express";
import {
  createCategoryRep,
  deleteCategoryRep,
  fetchAllCategoriesRep,
  fetchCategoryRep,
} from "./repository";

export const createCategory = async (req: Request, res: Response) => {
  await createCategoryRep();
  res.send();
};

export const fetchAllCategories = async (req: Request, res: Response) => {
  await fetchAllCategoriesRep();
  res.send();
};

export const fetchCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  await fetchCategoryRep(+categoryId);
  res.send();
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  await deleteCategoryRep(+categoryId);
  res.send();
};
