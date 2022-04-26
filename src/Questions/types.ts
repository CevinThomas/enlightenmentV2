import { Choice } from "../Choices/types";

export type QuestionsPayload = {
  questions: SingleQuestion[];
  subjectId: number;
  categoryId: number;
  groupName: string;
  groupDesc: string;
};

export type SingleQuestion = {
  title: string;
  description: string;
  timeToAnswer: string;
  choices: Choice[];
};
