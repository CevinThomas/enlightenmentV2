import Joi from "joi";

export const createTagValidator = Joi.object({
  title: Joi.string().required().max(50),
  question_id: Joi.number(),
  subject_id: Joi.number(),
  category_id: Joi.number(),
});

export const singleTagValidator = Joi.object({
  tagId: Joi.number().required(),
});
