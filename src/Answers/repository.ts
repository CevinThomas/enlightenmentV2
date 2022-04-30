import { AddAnswerPayload } from "./types";
import db from "../../db/database";
import { sql } from "@databases/pg";

export const addAnswerRep = async ({
  questionId,
  userId,
  choiceId,
}: AddAnswerPayload) => {
  try {
    await db.query(sql`
        INSERT INTO answers (question_id, user_id, choice_id) VALUES (${questionId}, ${userId}, ${choiceId})
`);
  } catch (e) {}
};
