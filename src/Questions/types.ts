export type QuestionsPayload = {
  questions: SingleQuestion[];
  subjectId: number;
  categoryId: number;
};

export type SingleQuestion = {
  title: string;
  description: string;
  timeToAnswer: string;
};
