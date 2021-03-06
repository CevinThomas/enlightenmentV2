import { QuestionsPayload } from "./types";
import db from "../../db/database";
import { sql } from "@databases/pg";

export const createQuestionsRep = async ({
  questions,
  subjectId,
  categoryId,
  groupDesc,
  groupName,
  licenceId,
}: QuestionsPayload) => {
  try {
    await db.tx(async (db) => {
      const [groupIdObj] = await db.query(sql`
        INSERT INTO questions_group (name, description, licence_id)
        VALUES (${groupName}, ${groupDesc}, ${licenceId})
        RETURNING group_id
      `);

      const allTitles = questions.map((question) => question.title);
      const allDescriptions = questions.map((question) => question.description);
      const allTimeToAnswer = questions.map(
        (question) => question.timeToAnswer
      );

      const questionIds = await db.query(sql`
        INSERT INTO questions (title, description, timetoanswer, subject_id, category_id, group_id) VALUES (unnest(${allTitles}::VARCHAR[]), unnest(${allDescriptions}::VARCHAR[]), unnest(${allTimeToAnswer}::INT[]), ${subjectId}, ${categoryId}, ${groupIdObj.group_id}) RETURNING question_id
`);

      for (let i = 0; i < questions.length; i++) {
        const amountOfChoices = questions[i].choices.length;
        const questionIdToUse: any = questionIds[i].question_id;

        const questionIdsToInsert = Array(amountOfChoices).fill(
          questionIdToUse,
          0,
          amountOfChoices
        );

        const choiceTitles = questions[i].choices.map((choice) => choice.title);
        const choiceCorrects = questions[i].choices.map(
          (choice) => choice.correct
        );

        await db.query(sql`
        INSERT INTO choices (title, correct, question_id) VALUES (unnest(${choiceTitles}::VARCHAR[]), unnest(${choiceCorrects}::BOOLEAN[]), unnest(${questionIdsToInsert}::INT[]))
`);
      }
    });
  } catch (e) {
    console.warn(e);
  }
};

export const getAllQuestionsPerLicenceRep = async (licenceId: string) => {
  try {
    return await db.query(sql`
        SELECT q.title, q.description, q.timetoanswer, array_agg(json_build_object('title', c.title, 'correct', c.correct)) AS choices
        FROM questions q
          INNER JOIN questions_group qg ON q.group_id = qg.group_id
        INNER JOIN choices c on q.question_id = c.question_id
        WHERE qg.licence_id = ${licenceId}
        GROUP BY q.title, q.description, q.timetoanswer
`);
  } catch (e) {}
};

export const fetchAllQuestionsRep = async () => {
  try {
  } catch (e) {}
};
export const fetchSingleQuestionRep = async () => {};
export const deleteQuestionRep = async () => {};
