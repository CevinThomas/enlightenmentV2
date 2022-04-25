import { GroupOfQuestionsPayload, QuestionsPayload } from "./types";
import db from "../../db/database";
import { sql } from "@databases/pg";

export const createGroupOfQuestionsRep =
  async ({}: GroupOfQuestionsPayload) => {
    try {
    } catch (e) {}
  };

export const createQuestionsRep = async ({
  title,
  description,
  timeToAnswer,
}: QuestionsPayload) => {
  try {
    return await db.query(sql`
        INSERT INTO questions (title, description, timetoanswer) VALUES (${title}, ${description}, ${timeToAnswer})
`);
  } catch (e) {}
};
export const fetchAllQuestionsRep = async () => {};
export const fetchSingleQuestionRep = async () => {};
export const deleteQuestionRep = async () => {};
