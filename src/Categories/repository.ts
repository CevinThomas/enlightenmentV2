import { CreateCategoryPayload } from "./interfaces";
import db, { sql } from "../../db/database";

export const createCategoryRep = async (
  createPayload: CreateCategoryPayload
) => {
  try {
    await db.query(sql`
    INSERT INTO categories (title, licence_id) VALUES (${createPayload.title}, ${createPayload.licenceId})
`);
  } catch (e) {}
};

export const fetchAllCategoriesRep = async () => {
  try {
    return await db.query(sql`
    SELECT categories.title, categories.licence_id
    FROM categories
`);
  } catch (e) {}
};

export const fetchCategoryRep = async (categoryId: number) => {
  try {
    await db.query(sql`
        SELECT categories.title, array_agg(tags.title)
        FROM categories
        LEFT JOIN tags on categories.category_id = tags.category_id
        WHERE tags.category_id = ${categoryId}
          GROUP BY categories.title
`);
  } catch (e) {}
};

export const deleteCategoryRep = async (categoryId: number) => {
  try {
    await db.query(sql`
        DELETE FROM categories 
          WHERE category_id = ${categoryId}
`);
  } catch (e) {}
};
