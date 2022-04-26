import { Choice } from "./types";
import db from "../../db/database";
import { sql } from "@databases/pg";

export const createChoiceRep = async (choices: Choice[]) => {
  try {
    const allTitles = choices.map((choice) => choice.title);
    const allCorrect = choices.map((choice) => choice.correct);
    const allIds = choices.map((choice) => choice.question_id);

    await db.query(sql`
        INSERT INTO choices (title, correct, question_id) VALUES (unnest(${allTitles}), unnest(${allCorrect}), unnest(${allIds}))
`);
  } catch (e) {}
};
