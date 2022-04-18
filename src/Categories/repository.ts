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

export const fetchAllCategoriesRep = async () => {
  try {
    await db.query(sql`
    SELECT categories.title, array_agg(tags.title) 
      FROM categories
      LEFT JOIN tags on categories.category_id = tags.category_id
      GROUP BY categories.title
`);
  } catch (e) {}
};

export const fetchCategoryRep = (categoryId: number) => {};

export const deleteCategoryRep = (categoryId: number) => {};
