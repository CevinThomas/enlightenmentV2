import Joi from "joi";

export const questionsPayload = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  timeToAnswer: Joi.number().optional().allow(null),
});

export const groupOfQuestionsPayload = Joi.object({
  questions: Joi.array().items(questionsPayload).required(),
  subject: Joi.string().required(),
});