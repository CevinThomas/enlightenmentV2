import { QuestionsPayload } from "./types";
import db from "../../db/database";
import { sql } from "@databases/pg";

export const createQuestionsRep = async ({
  questions,
  subjectId,
  categoryId,
}: QuestionsPayload) => {
  try {
    const allTitles = questions.map((question) => question.title);
    const allDescriptions = questions.map((question) => question.description);
    const allTimeToAnswer = questions.map((question) => question.timeToAnswer);

    /*await bulkInsert({
      database: db,
      tableName: `questions`,
      columnTypes: {
        title: sql`VARCHAR(50)`,
        description: sql`VARCHAR(200)`,
        timetoanswer: sql`INT`,
      },
      columnsToInsert: ['title', 'description', ''],
      records
    )*/

    return await db.query(sql`
        INSERT INTO questions (title, description, timetoanswer, subject_id, category_id) VALUES (unnest(${allTitles}::VARCHAR[]), unnest(${allDescriptions}::VARCHAR[]), unnest(${allTimeToAnswer}::INT[]), ${subjectId}, ${categoryId})
`);
  } catch (e) {}
};
export const fetchAllQuestionsRep = async () => {};
export const fetchSingleQuestionRep = async () => {};
export const deleteQuestionRep = async () => {};
