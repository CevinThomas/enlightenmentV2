import { SubjectPayload } from "./types";
import db from "../../db/database";
import { sql } from "@databases/pg";

export const createSubjectRep = async (payload: SubjectPayload) => {
  try {
    await db.query(sql`
        INSERT INTO subjects (title, description, category_id, licence_id) VALUES (${payload.title}, ${payload.description}, ${payload.categoryId}, ${payload.licenceId})
`);
  } catch (e) {}
};

export const getAllSubjectsRep = async () => {
  try {
    return await db.query(sql`
        SELECT title, description, category_id, licence_id
          FROM subjects
`);
  } catch (e) {}
};
