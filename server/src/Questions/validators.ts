import Joi from "joi";

export const questionsPayload = Joi.object({
  questions: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().required(),
        description: Joi.string().optional().allow(""),
        timeToAnswer: Joi.number().optional().allow(null),
      })
    )
    .required()
    .min(1),
  subjectId: Joi.number().required(),
  categoryId: Joi.number().required(),
  groupName: Joi.string().required(),
  groupDesc: Joi.string().optional().default(""),
  licenceId: Joi.string().required().min(36).max(36),
});

export const groupOfQuestionsPayload = Joi.object({
  questions: Joi.array().items(questionsPayload).required(),
  subject: Joi.string().required(),
});
