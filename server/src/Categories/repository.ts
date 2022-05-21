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
    SELECT categories.title, category_id, categories.licence_id
    FROM categories
`);
  } catch (e) {}
};

export const fetchCategoryPerLicenceRep = async (categoryId: string) => {
  try {
    return await db.query(sql`
        SELECT title
        FROM categories
       WHERE licence_id = ${categoryId}
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
