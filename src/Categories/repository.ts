import { CreateCategoryPayload } from "./interfaces";
import db, { sql } from "../../db/database";

export const createCategoryRep = async (
  createPayload: CreateCategoryPayload
) => {
  try {
    await db.query(sql`
    INSERT INTO categories (title) VALUES (${createPayload.title})
`);
  } catch (e) {}
};

export const fetchAllCategoriesRep = () => {};

export const fetchCategoryRep = (categoryId: number) => {};

export const deleteCategoryRep = (categoryId: number) => {};
