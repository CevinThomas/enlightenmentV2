import Joi from "joi";

export const addAnswerPayload = Joi.object({
  questionId: Joi.string().required(),
  choiceId: Joi.string().required(),
  userId: Joi.string().required(),
});
