import Joi from "joi";

export const createSubjectValidator = Joi.object({
  category_id: Joi.number().required(),
  tag_id: Joi.number(),
  title: Joi.string().required().max(50),
  description: Joi.string().required().max(200),
});

export const singleCategory = Joi.object({
  category_id: Joi.number().required(),
});
