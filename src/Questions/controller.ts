import {
  createQuestionsRep,
  deleteQuestionRep,
  fetchAllQuestionsRep,
  fetchSingleQuestionRep,
} from "./repository";

export const createQuestions = async () => {
  try {
    await createQuestionsRep();
  } catch (e) {}
};

export const fetchAllQuestions = async () => {
  try {
    await fetchAllQuestionsRep();
  } catch (e) {}
};
export const fetchSingleQuestion = async () => {
  try {
    await fetchSingleQuestionRep();
  } catch (e) {}
};
export const deleteQuestion = async () => {
  try {
    await deleteQuestionRep();
  } catch (e) {}
};
